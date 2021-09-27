import axios from "axios";
export function api() {
  const res = axios.request({
    method: "get",
    user: "https://my-json-server.typicode.com/atothey/demo/user",
  });
  return res;
}
