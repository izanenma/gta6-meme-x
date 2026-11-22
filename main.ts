// gta6-meme-x-01 entry: hand the post's address to the grader.
// The post itself is the entry — the house reads it from X — so this
// program does nothing but copy POST.json into the output directory.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function main(): void {
  const src = join(BOT_DIR, 'POST.json');
  if (!existsSync(src)) {
    console.error(`POST.json not found in ${BOT_DIR}`);
    process.exit(1);
  }
  const raw = readFileSync(src, 'utf8');
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    console.error('POST.json is not valid JSON');
    process.exit(1);
  }
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    console.error('POST.json must be an object with a url string');
    process.exit(1);
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'POST.json'), raw);
}

main();
