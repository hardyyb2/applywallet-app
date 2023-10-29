import axios from "axios";

import { envVars } from "@/utils/env-vars";

const extApi = axios.create({
  baseURL: envVars.PLASMO_PUBLIC_API_URL,
  withCredentials: true,
});

export { extApi };
