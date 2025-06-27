import * as Yup from "yup";

export const avatarSchema = Yup.string()
   .url("Avatar must be a valid URL")
   .typeError("Avatar must be a URL")
   .notOneOf(["file://"], "Local file URLs are not allowed")
   .matches(/^https:\/\/.*\.(png|jpe?g|svg|webp)$/i, {
      message: "Avatar must ending in .png, .jpg, .jpeg, .svg, or .webp",
   });

export const countrySchema = Yup.string()
   .min(4, "Country name must be at least 4 characters")
   .max(60, "Country name must be at most 60 characters")
   .matches(/^[a-zA-Z]+$/, "Country name must contain only letters")
   .required("Country name is required");

export const addressSchema = Yup.string()
   .min(4, "Address must be at least 4 characters")
   .max(60, "Address must be at most 60 characters")
   .matches(/^[a-zA-Z-0-9]+$/, "Address must contain only letters and numbers")
   .required("Address is required");

export const phoneSchema = Yup.string()
   .matches(/^\+?[\d-]+$/, "Phone number must contain only numbers and '+'")
   .min(10, "Phone number must be at least 10 characters")
   .max(20, "Phone number must be at most 20 characters")
   .required("Phone number is required");

export const birthDateSchema = Yup.date()
   .typeError("Birth date must be a date")
   .min(
      new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 10),
      "You must be at least 10 years old"
   )
   .max(new Date(), "Birth date must be before today")
   .required("Birth date is required");

export const genderSchema = Yup.string().oneOf(["male", "female", "other"]);

export const zipCodeSchema = Yup.string()
   .matches(/^\d{5}$/, "Zip code must contain 5 numbers")
   .required("Zip code is required");

export const firstNameSchema = Yup.string()
   .min(2, "First name must be at least 2 characters")
   .max(50, "First name must be at most 60 characters")
   .matches(/^[a-zA-Z]+$/, "First name must contain only letters")
   .required("First name is required");

export const lastNameSchema = Yup.string()
   .min(2, "Last name must be at least 2 characters")
   .max(50, "Last name must be at most 60 characters")
   .matches(/^[a-zA-Z]+$/, "Last name must contain only letters")
   .required("Last name is required");

export const citySchema = Yup.string()
   .min(2, "City must be at least 2 characters")
   .max(50, "City must be at most 60 characters")
   .matches(/^[a-zA-Z]+$/, "City must contain only letters")
   .required("City is required");
