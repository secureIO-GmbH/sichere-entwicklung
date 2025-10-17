#!/usr/bin/env node
const { spawnSync } = require("node:child_process");
const path = require("node:path");

const PHASEN = [
  "planung",
  "design",
  "entwicklung",
  "testen",
  "bereitstellung",
  "wartung",
];

for (const p of PHASEN) {
  const dir = path.join("pages", p);
  const out = path.join(dir, "graph.mmd");
  const res = spawnSync("node", ["scripts/gen-mermaid.js", dir, "--out", out], {
    stdio: "inherit"
  });
  if (res.status !== 0) process.exit(res.status);
}
