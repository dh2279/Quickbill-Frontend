import axios from "axios";

const BASE = "https://quickbill-backend-lqnm.onrender.com";

export const getProducts = () => axios.get(`${BASE}/products/all`);
export const createBill = (bill) => axios.post(`${BASE}/bill/create`, bill);
export const downloadPdf = (id) =>
  axios.get(`${BASE}/bill/invoice/${id}`, { responseType: "blob" });
