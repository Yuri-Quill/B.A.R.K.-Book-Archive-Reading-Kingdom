import * as Yup from "yup";

import {
   emailSchema,
   userNameSchema,
} from "@/shared/validation/common-schemas";
import { avatarSchema } from "@/shared/validation/user-schema";

export const userAccountSchema = Yup.object().shape({
   username: userNameSchema,
   email: emailSchema,
   avatar: avatarSchema,
});
