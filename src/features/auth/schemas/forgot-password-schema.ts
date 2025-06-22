import * as Yup from "yup";

import { emailSchema } from "@/shared/validation/common-schemas";

export const forgotPasswordSchema = Yup.object().shape({
   email: emailSchema,
   clientURL: Yup.string().required("Client URL is required"),
});
