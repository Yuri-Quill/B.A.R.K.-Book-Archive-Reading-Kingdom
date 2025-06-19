import * as Yup from "yup";

import {
   confirmPasswordSchema,
   passwordSchema,
} from "@/shared/validation/commonSchemas";

export const resetPasswordSchema = Yup.object().shape({
   password: passwordSchema,
   confirmPassword: confirmPasswordSchema,
});
