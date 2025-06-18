import * as Yup from "yup";

import { emailSchema } from "@/shared/validation/commonSchemas";

export const forgotPasswordSchema = Yup.object().shape({
   email: emailSchema,
});
