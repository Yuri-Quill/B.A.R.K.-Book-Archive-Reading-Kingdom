import {
   addressSchema,
   birthDateSchema,
   citySchema,
   countrySchema,
   firstNameSchema,
   genderSchema,
   lastNameSchema,
   phoneSchema,
   zipCodeSchema,
} from "@/shared/validation/user-schema";
import * as Yup from "yup";

export const userProfileSchema = Yup.object().shape({
   firstName: firstNameSchema,
   lastName: lastNameSchema,
   gender: genderSchema,
   birthDate: birthDateSchema,
   phone: phoneSchema,
   country: countrySchema,
   city: citySchema,
   zipCode: zipCodeSchema,
   address: addressSchema,
});
