// news-image-20261124 — "Sum up 24 November's world news in one image"
//
// This program writes one image to /output/entry.png: a newspaper-style
// front page summarising the world news of Tuesday 24 November 2026.
// The image is original artwork generated for this entry and shipped in
// this repository as entry.png; this program copies it byte-for-byte.
//
// Deterministic: no network, no randomness, no timestamps, no input.
// Every run writes exactly the same bytes to /output/entry.png.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const out = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(src, out);

console.log("wrote " + out + " (" + statSync(out).size + " bytes)");
