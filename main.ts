import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You open the hotel minibar at 1 a.m. Water $8, peanuts $12, and the tiny Toblerone has a handwritten price tag that just says: 'you live here now.'";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

console.log(LINE);
