import httpClient from "../http-common.ts";

const getAll = () => {
  return httpClient.get("/venta/");
};

//get by prod and month
const getByProdMonth = (id: any) => {
  return httpClient.get(`/venta/por-prod-mes/${id}`);
};

const getPaymentsPriorities = () => {
  return httpClient.get("/venta/por-metodo-pago/1");
};

const getTopProductSold = () => {
  return httpClient.get("/venta/top-productos/1");
};

export default {
  getAll,
  getByProdMonth,
  getPaymentsPriorities,
  getTopProductSold,
};
