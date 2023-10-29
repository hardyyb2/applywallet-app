import axios from "axios";

const extApi = axios.create({
  baseURL: process.env.PLASMO_PUBLIC_API_URL,
  withCredentials: true,
});

export { extApi };
