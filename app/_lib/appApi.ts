import axios from "axios";

const appApi = axios.create({
  baseURL: "/",
});

export { appApi };
