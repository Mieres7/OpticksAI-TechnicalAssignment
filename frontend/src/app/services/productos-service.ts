import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/producto/");
};

export default { getAll };
