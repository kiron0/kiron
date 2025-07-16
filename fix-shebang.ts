import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cliPath = path.join(__dirname, "dist/cli", "index.js");
const nodeShebang = "#!/usr/bin/env node\n";
const tsxShebang = "#!/usr/bin/env tsx\n";

let content = fs.readFileSync(cliPath, "utf8");
if (content.startsWith(tsxShebang)) {
  content = content.slice(tsxShebang.length);
}
if (!content.startsWith(nodeShebang)) {
  content = nodeShebang + content;
}
fs.writeFileSync(cliPath, content);
