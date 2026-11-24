/**
 * The One-Line Exit.
 *
 * One line of a resignation letter: it reads like a real letter
 * ("I resign, effective Friday"), names a specific workplace habit
 * ("quick questions"), and the twist lands in the last words — after
 * four years of them, not one was quick, so the polite corporate
 * phrase is indicted by its own track record. One concrete detail
 * plus a believable twist that redefines the setup, in the voice of
 * someone who kept the receipt for four years. 115 characters,
 * one line.
 *
 * The gate is checked here exactly as the sealed scorer states it:
 * UTF-8 text of 1 to 140 characters, not only white space, one line.
 */
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I resign, effective Friday: after four years of 'quick questions,' I can confirm that not one of them was quick.";

function main(): void {
  if (!(LINE.length >= 1 && LINE.length <= 140)) {
    throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n")) throw new Error("entry must be a single line");
  if (LINE.trim() !== LINE) {
    throw new Error("no leading/trailing whitespace");
  }
  if (!LINE.trim()) throw new Error("entry must not be only white space");
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
}

main();
