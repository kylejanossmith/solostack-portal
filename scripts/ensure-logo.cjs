#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const b64Path = path.join(__dirname, "solostack-pfp.png.b64");
const out = path.join(__dirname, "..", "public", "solostack-pfp.png");
const b64 = fs.readFileSync(b64Path, "utf8").trim();
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, Buffer.from(b64, "base64"));
console.log("Wrote", out, "(" + fs.statSync(out).size + " bytes)");
