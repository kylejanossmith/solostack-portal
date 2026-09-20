#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = __dirname;
const out = path.join(dir, "..", "public", "solostack-pfp.png");
const parts = ["solostack-pfp.png.b64.part1", "solostack-pfp.png.b64.part2"].map((f) =>
  fs.readFileSync(path.join(dir, f), "utf8").trim()
);
const b64 = parts.join("");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, Buffer.from(b64, "base64"));
console.log("Wrote", out, "(" + fs.statSync(out).size + " bytes)");
