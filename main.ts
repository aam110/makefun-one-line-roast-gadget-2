import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My toaster has two settings: burn it, or warm the bread's feelings. No third option exists.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
