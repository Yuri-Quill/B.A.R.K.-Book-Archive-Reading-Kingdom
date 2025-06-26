import * as Yup from "yup";

import {
   emailSchema,
   userNameSchema,
} from "@/shared/validation/common-schemas";

export const userAccountSchema = Yup.object().shape({
   username: userNameSchema,
   email: emailSchema,
});
