import path from "path";
import { fileURLToPath } from "url";
import { build } from "esbuild";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

build({
  bundle: true,
  sourcemap: true,
  format: "esm",
  target: "esnext",
  entryPoints: [path.join(__dirname, "src", "index.ts")],
  outdir: path.join(__dirname, "dist"),
  outExtension: { ".js": ".mjs" },
  loader: {
    ".html": "text",
  },
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
