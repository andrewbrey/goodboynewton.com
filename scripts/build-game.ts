import { build, Plugin } from "esbuild";
import { config } from "dotenv";
import { writeFile } from "fs/promises";
import { join } from "node:path";

config();

const isDev = process.env.NODE_ENV === "development";

let gameBuildLogger: Plugin = {
  name: "game-build-logger",
  setup(build) {
    let now = Date.now();
    build.onStart(() => {
      now = Date.now();
      console.log("🦮 Building...");
    });
    build.onEnd(async (results) => {
      if (results.errors.length) {
        console.log(`🦮 Built in ${Date.now() - now}ms with errors!`, results.errors);
      } else {
        // public/game/index-WNH6GVB5.js OR public/game/index-WNH6GVB5.js.map
        const finalHash = Object.keys(results.metafile?.outputs ?? {})[0]
          .split("-")[1]
          .split(".")[0];
        const hashFile = join(__dirname, "..", "app", "game", "hash.ts");

        await writeFile(
          hashFile,
          ["// AUTO-GENERATED FILE, DO NOT IMPORT WITHIN GAME MODULE GRAPH!", `export default "${finalHash}";`].join(
            "\n"
          ),
          { encoding: "utf-8" }
        );

        console.log(`🦮 Built in ${Date.now() - now}ms\n`);
      }
    });
  },
};

async function go() {
  await build({
    entryPoints: ["app/game/index.ts"],
    entryNames: "[name]-[hash]",
    metafile: true,
    bundle: true,
    outdir: "public/game/",
    minify: !isDev,
    watch: isDev,
    sourcemap: "external",
    keepNames: isDev,
    plugins: [gameBuildLogger],
  });
}

go();
