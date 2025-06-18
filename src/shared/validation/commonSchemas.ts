import * as Yup from "yup";

export const userNameSchema = Yup.string()
   .min(4, "Username must be at least four characters")
   .max(20, "Username must be no longer than twenty characters")
   .matches(
      /^[a-zA-Z0-9\-_]+$/,
      'Username can only contain letters, numbers, "-" and "_"'
   )
   .required("Username is required");

export const emailSchema = Yup.string()
   .email("Enter a valid email address")
   .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
   )
   .required("Email address is required");

export const passwordSchema = Yup.string()
   .min(8, "Password must be at least 8 characters")
   .max(30, "Password must be no longer than 30 characters")
   .matches(/[a-z]/, "Password must contain at least one [a-z]")
   .matches(/[A-Z]/, "Password must contain at least one [A-Z]")
   .matches(/[0-9]/, "Password must contain at least one [0-9]")
   .matches(/[!@#$%^&*]/, "Password must contain at least one [!@#$%^&*]")
   .required("Password is required");

export const confirmPasswordSchema = Yup.string()
   .oneOf([Yup.ref("password")], "Passwords must match")
   .required("Confirm password is required");
