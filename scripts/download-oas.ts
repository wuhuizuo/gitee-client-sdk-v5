import * as path from "jsr:@std/path@1.0.8";
import * as yaml from "jsr:@std/yaml@1.0.5";

async function main() {
  const res = Deno.readTextFileSync(
    path.join(
      path.dirname(path.fromFileUrl(import.meta.url)),
      "..",
      "openapi.yaml",
    ),
  );
  const spec = yaml.parse(res);
  if (spec) {
    const exportedJsonString = `export default ${
      JSON.stringify(spec, null, 2)
    } as const;`;
    // write the exported string to ../gitee-v5-oas.ts
    await Deno.writeTextFile(
      path.join(
        path.dirname(path.fromFileUrl(import.meta.url)),
        "..",
        "openapi-v5-oas.ts",
      ),
      exportedJsonString,
    );
  } else {
    throw new Error("No data in json file");
  }
}

main().catch((e) => {
  console.error(e);
  Deno.exit(1);
});
