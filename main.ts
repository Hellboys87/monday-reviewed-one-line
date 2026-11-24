// Monday, Reviewed in One Line — make.fun entry.
// Writes a single-line review of Monday to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). The gate allows 1-200 characters, one line only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "★☆☆☆☆ — My Monday opened with 47 unread emails and a 9 a.m. meeting that should have been email #48; zero stars, no refund, and it auto-renews weekly.";

const MAX_CHARS = 200;

function main(): void {
  if (ENTRY.includes("\n") || ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(`entry must be a single line of 1-${MAX_CHARS} characters`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
