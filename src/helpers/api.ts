interface Props {
  url: string;
  method?: string;
  //@ts-expect-error "body can be any time"
  body?: any;
}
const baseUrl = "https://jsonplaceholder.typicode.com";
export const api = ({ url, method = "GET", body = {} }: Props) => {
  const data = fetch(`${baseUrl}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    // body,
  });
  return data;
};
