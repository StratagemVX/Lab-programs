import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const htmlFiles = ["index.html", "initializr.html"];

for (const fileName of htmlFiles) {
  const fullPath = path.join(rootDir, fileName);
  assert.ok(fs.existsSync(fullPath), `${fileName} must exist`);
  const html = fs.readFileSync(fullPath, "utf8");
  assert.match(html, /<!DOCTYPE html>/i, `${fileName} must declare HTML5 doctype`);

  const refs = [...html.matchAll(/(?:src|href)=["']([^"']+)["']/gi)]
    .map((m) => m[1])
    .filter((ref) => !ref.startsWith("http://") && !ref.startsWith("https://") && !ref.startsWith("#"));

  for (const ref of refs) {
    const rel = decodeURIComponent(ref.split(/[?#]/)[0]);
    const target = path.resolve(rootDir, rel);
    assert.ok(target.startsWith(rootDir), `Path traversal blocked for reference: ${ref}`);
    assert.ok(fs.existsSync(target), `Missing local asset referenced in ${fileName}: ${ref}`);
  }
}

console.log(`Verified HTML pages (${htmlFiles.join(", ")}) and all referenced images/archives.`);
