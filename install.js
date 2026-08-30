import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("==> Building LastFMStats plugin...");
const buildRes = spawnSync(process.execPath, [path.join(__dirname, "build.js")], {
  stdio: "inherit",
});

if (buildRes.status !== 0) {
  console.error("Build failed!");
  process.exit(1);
}

console.log("\n==> LastFMStats build ready!");
console.log("\nAvailable installation methods:");
console.log("1. Local Dev Server (Recommended for instant reload):");
console.log("   Run: ELECTRON_RUN_AS_NODE=1 electron40 serve.js");
console.log("   Then in Tidal -> Luna Settings -> Plugin Store, click Install on LastFMStats.");
console.log("\n2. Install via URL in Tidal:");
console.log("   In Tidal -> Luna Settings -> Plugin Store -> 'Install from URL'");
console.log("   Enter: http://127.0.0.1:3000/LastFMStats");
