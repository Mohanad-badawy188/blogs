interface Props {
  url: string;
  method?: string;
  body?: Record<string, unknown> | null;
}
const baseUrl = "https://jsonplaceholder.typicode.com";
export const api = ({ url, method = "GET", body = null }: Props) => {
  const data = fetch(`${baseUrl}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: method === "GET" ? null : body ? JSON.stringify(body) : null,
  });
  return data;
};
