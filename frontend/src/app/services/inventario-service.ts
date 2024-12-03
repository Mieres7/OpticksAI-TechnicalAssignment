import httpClient from "../http-common.ts";

const getByProdMonth = (id: any) => {
  return httpClient.get(`/inventario/por-prod-mes/${id}`);
};

export default { getByProdMonth };
