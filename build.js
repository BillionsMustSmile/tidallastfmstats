import fs from "fs";
import path from "path";
import crypto from "crypto";
import esbuild from "esbuild";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, "dist");
const SRC_FILE = path.join(__dirname, "src", "index.tsx");
const PKG_NAME = "LastFMStats";

// Dynamic externals plugin identical to TidaLuna's build system
function dynamicExternalsPlugin(pkgName) {
  const externals = [
    "@luna/core",
    "@luna/lib",
    "@luna/ui",
    "@luna/dev",
    "@luna/linux",
    "react",
    "react/jsx-runtime",
    "react-dom/client",
    "react-dom",
    "oby",
    "@inrixia/helpers"
  ];
  
  const sanitize = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const filter = new RegExp(`^(?:${externals.map(sanitize).join("|")})$`);

  return {
    name: "dynamicExternals",
    setup(build) {
      build.onResolve({ filter }, (args) => ({
        path: args.path,
        namespace: "dynamicExternals",
      }));
      
      build.onLoad({ filter: /.*/, namespace: "dynamicExternals" }, (args) => {
        return {
          contents: `
            var mod = window.luna?.core?.modules?.["${args.path}"];
            if (mod === undefined && typeof window.require === "function") {
              try { mod = window.require("${args.path}"); } catch (e) {}
            }
            if (mod === undefined) {
              throw new Error("Cannot find module ${args.path} in luna.core.modules");
            }
            try {
              window.luna?.core?.LunaPlugin?.getByName("${args.path}")?.addDependant(
                window.luna?.core?.LunaPlugin?.getByName("${pkgName}")
              );
            } catch (e) {}
            module.exports = mod;
          `,
          loader: "js",
        };
      });
    },
  };
}

async function build() {
  console.log("Building LastFMStats plugin for TidaLuna...");

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  const outMjs = path.join(DIST_DIR, `${PKG_NAME}.mjs`);
  const outJson = path.join(DIST_DIR, `${PKG_NAME}.json`);
  const outStore = path.join(DIST_DIR, "store.json");

  const result = await esbuild.build({
    entryPoints: [SRC_FILE],
    outfile: outMjs,
    bundle: true,
    format: "esm",
    platform: "browser",
    target: "chrome126",
    loader: {
      ".css": "text",
      ".ts": "tsx",
      ".tsx": "tsx",
    },
    jsx: "automatic",
    sourcemap: "inline",
    minify: false,
    plugins: [dynamicExternalsPlugin(PKG_NAME)],
  });

  const code = fs.readFileSync(outMjs, "utf8");
  const hash = crypto.createHash("sha256").update(code).digest("base64url").slice(0, 11);

  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json"), "utf8"));

  const manifest = {
    name: PKG_NAME,
    description: pkg.description,
    author: pkg.author,
    homepage: pkg.homepage,
    repository: pkg.repository,
    exports: "./src/index.ts",
    version: pkg.version,
    hash: hash,
  };

  fs.writeFileSync(outJson, JSON.stringify(manifest, null, 2));

  const store = {
    name: "Last.fm Stats Plugin Store",
    description: "TidaLuna Plugins by srich",
    author: pkg.author,
    homepage: pkg.homepage,
    repository: pkg.repository,
    type: "module",
    plugins: [`${PKG_NAME}.mjs`],
  };

  fs.writeFileSync(outStore, JSON.stringify(store, null, 2));

  console.log("✅ Build completed successfully!");
  console.log("   - Bundle:   ", outMjs, `(${Math.round(code.length / 1024)} KB)`);
  console.log("   - Manifest: ", outJson);
  console.log("   - Store:    ", outStore);
  console.log("   - Hash:     ", hash);
}

build().catch((err) => {
  console.error("❌ Build error:", err);
  process.exit(1);
});
