#!/usr/bin/env node
/**
 * Generate Mermaid flowchart (graph TD) from a directory tree.
 * Usage:
 *   node scripts/gen-mermaid.js <directory> [--out <file>]
 *
 * Example:
 *   node scripts/gen-mermaid.js pages/planung --out pages/planung/graph.mmd
 */

const fs = require("fs");
const path = require("path");

// ---------- helpers ----------
const isDir  = p => fs.existsSync(p) && fs.statSync(p).isDirectory();
const isFile = p => fs.existsSync(p) && fs.statSync(p).isFile();
const base   = p => path.basename(p);
const stripExt = n => n.replace(/\.[^/.]+$/, "");

// IDs: stabil & sicher für Mermaid
const idify = n => stripExt(n)
  .replace(/\s+/g, "_")
  .replace(/[^A-Za-z0-9_-]/g, "_");

function labelize(name) {
  // Basis: Extension weg, Trenner -> Leerzeichen
  let raw = stripExt(name)
    .replace(/[._-]+/g, " ")            // _, -, . -> space
    .replace(/\s+/g, " ")               // Mehrfachspaces -> 1
    .trim();

  // Zwischen Buchstabe/Zahl Grenzen Leerzeichen einfügen
  // z.B. iso27001 -> iso 27001, soc2 -> soc 2, nis2 -> nis 2
  raw = raw
    .replace(/([A-Za-z])(\d)/g, "$1 $2")
    .replace(/(\d)([A-Za-z])/g, "$1 $2");

  // Alles groß
  return raw.toUpperCase();
}

const IGNORED_FILES = new Set(["index.md", "graph.mmd", ".DS_Store"]);

// ---------- walk the tree ----------
function walk(dir, edges, nodes, clicks) {
  const folderName  = base(dir);
  const folderId    = idify(folderName);
  const folderLabel = labelize(folderName);

  // Knoten für den aktuellen Ordner
  nodes.add(`${folderId}[${folderLabel}]`);

  // Einträge lesen, filtern, sortieren (stabil)
  const entries = fs.readdirSync(dir)
    .filter(e => !IGNORED_FILES.has(e))
    .sort((a, b) => a.localeCompare(b, "de"));

  for (const entry of entries) {
    const abs = path.join(dir, entry);
    const parentId = folderId;

    if (isDir(abs)) {
      const childId    = idify(entry);
      const childLabel = labelize(entry);

      edges.add(`${parentId} --> ${childId}[${childLabel}]`);
      nodes.add(`${childId}[${childLabel}]`);

      // click: auf den Unterordner-Namen (lowercase slug)
      clicks.add(`click ${childId} "${entry.toLowerCase()}"`);

      // Rekursiv
      walk(abs, edges, nodes, clicks);

    } else if (isFile(abs)) {
      // Optional: nur Markdown-Dateien als Knoten darstellen
      if (!/\.md$/i.test(entry)) continue;

      const label   = labelize(entry);
      const childId = idify(label);  // aus Label, damit id sicher bleibt

      edges.add(`${parentId} --> ${childId}[${label}]`);
      nodes.add(`${childId}[${label}]`);
      // Für Dateien meist kein click; bei Bedarf:
      // clicks.add(`click ${childId} "${stripExt(entry).toLowerCase()}"`);
    }
  }
}

// ---------- main ----------
const args = process.argv.slice(2);
if (!args.length) {
  console.error("Usage: node scripts/gen-mermaid.js <directory> [--out <file>]");
  process.exit(1);
}
const rootDir = path.resolve(process.cwd(), args[0]);
const outIdx  = args.indexOf("--out");
const outFile = outIdx !== -1 ? path.resolve(process.cwd(), args[outIdx + 1]) : null;

if (!isDir(rootDir)) {
  console.error(`Not a directory: ${rootDir}`);
  process.exit(2);
}

// Seiten-/Phasen-Farben (Segment-Farben deiner Startseite)
const phase = base(rootDir).toLowerCase();
const phaseColors = {
  planung:        { fill: "#F4A261", text: "#000000" }, // gelb/orange
  design:         { fill: "#E76F51", text: "#000000" },
  entwicklung:    { fill: "#D62828", text: "#FFFFFF" },
  testen:         { fill: "#023047", text: "#FFFFFF" },
  bereitstellung: { fill: "#8AB6D6", text: "#000000" },
  wartung:        { fill: "#2A9D8F", text: "#FFFFFF" }
};

// Sammeln
const edges  = new Set();
const nodes  = new Set();
const clicks = new Set();

// Tree bauen
walk(rootDir, edges, nodes, clicks);

// IDs aller Knoten extrahieren (für class … Zuweisung)
const nodeIds = Array.from(nodes).map(line => {
  const m = line.match(/^([A-Za-z0-9_-]+)\[/);
  return m ? m[1] : null;
}).filter(Boolean);

// Ausgabe zusammensetzen
const lines = [
  "graph TD",
  ...edges,
  ...nodes,
  ...clicks
];

// Phase-Füllung auf *alle* Knoten dieser Seite
const c = phaseColors[phase];
if (c && nodeIds.length) {
  lines.push(
    `classDef phaseFill fill:${c.fill},color:${c.text},stroke:#000,stroke-width:1.5px;`
  );
  // In Chunks, um superlange Zeilen zu vermeiden
  const chunkSize = 20;
  for (let i = 0; i < nodeIds.length; i += chunkSize) {
    const chunk = nodeIds.slice(i, i + chunkSize).join(",");
    lines.push(`class ${chunk} phaseFill;`);
  }
}

// Ergebnis schreiben/ausgeben
const result = lines.join("\n") + "\n";
if (outFile) {
  fs.writeFileSync(outFile, result, "utf8");
  console.log(`wrote ${path.relative(process.cwd(), outFile)}`);
} else {
  process.stdout.write(result);
}
