import {
  createClient,
  type NormalizeOAS,
  type OASClient,
} from "npm:fets@0.8.4";
import type giteeOas from "./openapi-v5-oas.ts";

type clientInitParams = {
  accessToken: string;
};

function newClient(
  { accessToken }: clientInitParams,
): OASClient<NormalizeOAS<typeof giteeOas>> {
  const apiClient = createClient<NormalizeOAS<typeof giteeOas>>({
    endpoint: "https://gitee.com/api",
    globalParams: {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      query: { "access_token": accessToken },
    },
  });

  return apiClient;
}

export { newClient };
