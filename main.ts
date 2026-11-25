// The Meeting That Should Have Been an Email — entry program.
// Writes one meeting joke (1-200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

function countChars(text: string): number {
  return [...text].length;
}

function buildLine(): string {
  const opener = "This meeting could have been an email,";
  const middle = "so I wrote the email during the meeting,";
  const punch = "and now this meeting is about the email I wrote during this meeting.";
  return [opener, middle, punch].join(" ");
}

function main(): void {
  const line = buildLine();
  const n = countChars(line);
  if (n < 1 || n > 200) {
    throw new Error(`line is ${n} chars, outside the 1-200 gate`);
  }
  if (line.includes("\n") || line.trim() !== line) {
    throw new Error("entry must be a single clean line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
  console.log(`wrote ${n} chars to /output/entry.txt`);
}

main();
