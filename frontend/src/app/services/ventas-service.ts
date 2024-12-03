import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/venta/");
};

//get by prod and month
const getByProdMonth = (id: any) => {
  return httpClient.get(`/venta/por-prod-mes/${id}`);
};

export default { getAll, getByProdMonth };
