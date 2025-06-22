import * as Yup from "yup";

import {
   emailSchema,
   passwordSchema,
} from "@/shared/validation/common-schemas";

export const signInSchema = Yup.object().shape({
   email: emailSchema,
   password: passwordSchema,
});
