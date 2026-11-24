import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I answer a thousand people a day, but I save my best tokens for you — 12,000 of them, spent rehearsing this one sentence.";

if (LINE.length > 200) {
  throw new Error(`line too long: ${LINE.length} characters (max 200)`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
