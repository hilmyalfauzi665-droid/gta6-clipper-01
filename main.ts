// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// The entry is a public YouTube video: the house reads the video itself
// through the YouTube Data API, so this program only has one job — copy
// VIDEO.json from the repository into the output directory, byte for byte.
// It uses no network, no wall clock and no files outside the repository,
// so its two runs always write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Fail loudly on a malformed link file instead of copying garbage: the
// house refuses an entry whose VIDEO.json does not parse or names no URL.
const link = JSON.parse(readFileSync(join(repoDir, "VIDEO.json"), "utf8")) as {
  url?: unknown;
};
if (typeof link.url !== "string" || link.url.length === 0) {
  throw new Error("VIDEO.json holds no url string");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
