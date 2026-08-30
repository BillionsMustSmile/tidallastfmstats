import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, "dist");
const PORT = 3000;

const MIME_TYPES = {
  ".json": "application/json",
  ".mjs": "application/javascript",
  ".js": "application/javascript",
  ".css": "text/css",
  ".html": "text/html",
};

const server = http.createServer((req, res) => {
  // Enable CORS for Luna
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  let reqPath = decodeURI(req.url?.split("?")[0] || "/");
  if (reqPath === "/") reqPath = "/store.json";

  const filePath = path.join(DIST_DIR, reqPath);

  // Prevent directory traversal
  if (!filePath.startsWith(DIST_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    fs.createReadStream(filePath).pipe(res);
    console.log(`[200] ${req.url} -> ${filePath}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(`Not Found: ${req.url}`);
    console.log(`[404] ${req.url}`);
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`\n🚀 LastFMStats Dev Server running at http://127.0.0.1:${PORT}`);
  console.log(`   - Store URL:   http://127.0.0.1:${PORT}/store.json`);
  console.log(`   - Plugin URL:  http://127.0.0.1:${PORT}/LastFMStats`);
  console.log(`\n💡 To install in Tidal / TidaLuna:`);
  console.log(`   1. Open Tidal -> Click your Profile -> Luna Settings`);
  console.log(`   2. Go to "Plugin Store" tab (Local DEV Store will show up automatically)`);
  console.log(`   3. Click "Install" on LastFMStats!\n`);
});
