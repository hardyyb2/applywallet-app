import { z } from "zod";

import { addCareerFormSchema } from "./add/components/addCareerForm.utils";

export type CareerType = z.infer<typeof addCareerFormSchema>;
