# Gitee OpenAPI V5 Client SDK

## How to update

1. download the swagger 2.0 spec file from:
   https://gitee.com/sdk/typescript-sdk-v5/raw/main/openapi-spec.json
2. convert it to open api v3 format with
   [swagger online editor](https://editor.swagger.io/)
3. fix the errors found by the swagger editor.
4. save the open api v3 yaml to `openapi.yaml` file.
5. generate code with with `deno task generate` command.
6. publish the package to jsr.io with `deno publish` command.
