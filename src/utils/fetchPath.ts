import { headers } from "next/headers";

export default function fetchPath(path: string): Promise<Response> {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";

  return fetch(`${header_url}${path}`);
}
