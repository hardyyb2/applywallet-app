import PocketBase from "pocketbase";

import { envVariables } from "@/utils/env-vars.utils";

const db = new PocketBase(envVariables.POCKETBASE_URL);

export { db };
