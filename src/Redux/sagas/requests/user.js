import axios from "axios";
export function api() {
  const res = axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/atothey/demo/user",
  });
  return res;
}
