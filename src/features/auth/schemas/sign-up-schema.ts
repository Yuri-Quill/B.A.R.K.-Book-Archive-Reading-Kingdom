import * as Yup from "yup";

import {
   confirmPasswordSchema,
   emailSchema,
   passwordSchema,
   userNameSchema,
} from "@/shared/validation/common-schemas";

export const signUpSchema = Yup.object().shape({
   username: userNameSchema,
   email: emailSchema,
   password: passwordSchema,
   confirmPassword: confirmPasswordSchema,
});
