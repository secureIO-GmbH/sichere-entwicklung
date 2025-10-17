#!/usr/bin/env node
/**
 * SSDLC index mermaid generator (one big LR graph)
 * - Phasen 1..6, jeweils klickbar (/pages/<phase>/)
 * - Alle Kinder (Dirs + .md) rekursiv; ignoriert index.md & graph.mmd
 * - Labels UPPERCASE, _/- → Space, Ziffern/Letters getrennt (ISO 27001)
 * - Alle Links absolut ab Site-Root (beginnend mit '/')
 * - WICHTIG: Unterbäume hängen direkt am Phase-Knoten (kein Doppel-Root mehr)
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.argv[2] || 'pages';
const OUT_FILE = process.argv[3] || '_includes/generated/index-graph.mmd';

const PHASE_ORDER = ['planung','design','entwicklung','testen','bereitstellung','wartung'];

const THEME_INIT = `%%{init:{
  "theme":"dark",
  "flowchart":{"curve":"basis","nodeSpacing":60,"rankSpacing":90,"htmlLabels":true},
  "themeVariables":{
    "primaryColor":"#0b1419",
    "lineColor":"#ffffff",
    "primaryTextColor":"#e6e6e6",
    "fontFamily":"'JetBrains Mono',monospace",
    "fontSize":"16px"
  }
}}%%`;

const CLASS_DEFS = `
classDef planung fill:#F4A261,color:#ffffff,stroke:#000,stroke-width:1px;
classDef design fill:#E76F51,color:#ffffff,stroke:#000,stroke-width:1px;
classDef entwicklung fill:#D62828,color:#ffffff,stroke:#000,stroke-width:1px;
classDef testen fill:#023047,color:#ffffff,stroke:#000,stroke-width:1px;
classDef bereitstellung fill:#8AB6D6,color:#ffffff,stroke:#000,stroke-width:1px;
classDef wartung fill:#2A9D8F,color:#ffffff,stroke:#000,stroke-width:1px;
`.trim();

// ---------- helpers ----------
const abs = (p) => '/' + p.replace(/^\/+/, '');
const isDir = (p) => fs.existsSync(p) && fs.statSync(p).isDirectory();

function idify(s){ return s.replace(/[^a-zA-Z0-9_]/g,'_').replace(/^([^A-Za-z])/, 'n_$1'); }

function prettyLabel(name){
  let base = name.replace(/\.(md|markdown)$/i,'');
  base = base.replace(/[_-]+/g,' ');
  base = base.replace(/([A-Za-z])([0-9])/g,'$1 $2').replace(/([0-9])([A-Za-z])/g,'$1 $2');
  return base.trim().toUpperCase();
}

function toUrl(relFsPath){
  const noExt = relFsPath.replace(/\.md$/i,'');
  let url = '/' + noExt.replace(/\\/g,'/').replace(/^\/+/,'');
  if(!url.endsWith('/')) url += '/';
  return url;
}

function listDirSorted(fsPath){
  return fs.readdirSync(fsPath, { withFileTypes:true })
    .sort((a,b)=>a.name.localeCompare(b.name));
}

// Recursively emit nodes/edges/clicks; **parentId is the phase node id**.
// phaseClass is the class name to color all descendants.
function walk(rootDir, relParts, parentId, phaseClass, acc){
  const baseFs = path.join(rootDir, ...relParts);
  const baseRel = path.join(...relParts);

  for(const e of listDirSorted(baseFs)){
    if(e.isDirectory()){
      const childRel = path.join(baseRel, e.name);
      const childId  = idify(path.join(rootDir, childRel));
      const label    = prettyLabel(e.name);
      const url      = abs(toUrl(path.join('pages', childRel)));

      acc.nodes.add(`${childId}[${label}]`);
      acc.classes.add(`class ${childId} ${phaseClass}`);
      acc.edges.add(`${parentId} --> ${childId}`);
      acc.clicks.add(`click ${childId} "${url}"`);

      walk(rootDir, [...relParts, e.name], childId, phaseClass, acc);
    }else{
      const name = e.name;
      if (/^index\.md$/i.test(name) || /^graph\.mmd$/i.test(name)) continue;

      const fileRel = path.join(baseRel, name);
      const fileId  = idify(path.join(rootDir, fileRel));
      const label   = prettyLabel(name);
      const url     = abs(toUrl(path.join('pages', fileRel)));

      acc.nodes.add(`${fileId}[${label}]`);
      acc.classes.add(`class ${fileId} ${phaseClass}`);
      acc.edges.add(`${parentId} --> ${fileId}`);
      acc.clicks.add(`click ${fileId} "${url}"`);
    }
  }
}

function generate(){
  const NODES = new Set();
  const EDGES = new Set();
  const CLICKS = new Set();
  const CLASSES = new Set();

  const out = [];
  out.push(THEME_INIT);
  out.push('graph LR');

  // central node
  out.push(`ssdlc_root["SSDLC"]`);
  out.push(`style ssdlc_root fill:#ffffff,stroke:#000000,stroke-width:2px,color:#000000`);
  out.push(CLASS_DEFS);

  PHASE_ORDER.forEach((phase, i)=>{
    const phaseDir = path.join(ROOT_DIR, phase);
    if(!isDir(phaseDir)) return;

    const phaseId    = idify(path.join(ROOT_DIR, phase)); // pages_phase
    const phaseLabel = `${i+1}. ${prettyLabel(phase)}`;
    const phaseUrl   = abs(toUrl(path.join('pages', phase)));

    // phase node attached to SSDLC
    out.push(`ssdlc_root --> ${phaseId}[${phaseLabel}]`);
    out.push(`class ${phaseId} ${phase}`);
    out.push(`click ${phaseId} "${phaseUrl}"`);

    // walk children with the phaseId as the PARENT (no duplicate root)
    const acc = { nodes:NODES, edges:EDGES, clicks:CLICKS, classes:CLASSES };
    walk(ROOT_DIR, [phase], phaseId, phase, acc);
  });

  // dump sets
  out.push(...Array.from(NODES));
  out.push(...Array.from(CLASSES));
  out.push(...Array.from(EDGES));
  out.push(...Array.from(CLICKS));

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive:true });
  fs.writeFileSync(OUT_FILE, out.join('\n')+'\n', 'utf8');
  console.log(`wrote ${OUT_FILE}`);
}

generate();
