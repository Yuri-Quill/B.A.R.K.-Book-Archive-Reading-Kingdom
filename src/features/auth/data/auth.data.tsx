import { inputTypes } from "@/shared/constants/input-types";
import { Mail, Lock, User } from "lucide-react";

export const signInFields = [
   {
      name: "email",
      placeholder: "Enter your email",
      icon: <Mail/>,
      ariaLabel: "Email address",
      type: inputTypes.email,
   },
   {
      name: "password",
      placeholder: "Enter your password",
      icon: Lock,
      ariaLabel: "Password",
      type: inputTypes.password,
   },
];

export const signUpFields = [
   {
      name: "username",
      placeholder: "Enter your username",
      icon: User,
      ariaLabel: "Username",
      type: inputTypes.text,
   },
   {
      name: "email",
      placeholder: "Enter your email",
      icon: Mail,
      ariaLabel: "Email address",
      type: inputTypes.email,
   },
   {
      name: "password",
      placeholder: "Enter your password",
      icon: Lock,
      ariaLabel: "Password",
      type: inputTypes.password,
   },
   {
      name: "confirmPassword",
      placeholder: "Confirm your password",
      icon: Lock,
      ariaLabel: "Confirm password",
      type: inputTypes.password,
   },
];

export const resetPasswordFields = [
   {
      name: "password",
      placeholder: "Enter your password",
      icon: Lock,
      ariaLabel: "Password",
      type: inputTypes.password,
   },
   {
      name: "confirmPassword",
      placeholder: "Confirm your password",
      icon: Lock,
      ariaLabel: "Confirm password",
      type: inputTypes.password,
   },
];

export const forgotPasswordFields = [
   {
      name: "email",
      placeholder: "Enter your email",
      icon: Mail,
      ariaLabel: "Email address",
      type: inputTypes.email,
   },
];
