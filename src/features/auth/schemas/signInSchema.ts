import * as Yup from "yup";

import { emailSchema, passwordSchema } from "@/shared/validation/commonSchemas";

export const signInSchema = Yup.object().shape({
   email: emailSchema,
   password: passwordSchema,
});
