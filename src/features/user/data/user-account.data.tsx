import { inputTypes } from "@/shared/constants/input-types";
import { Image, Mail, User } from "lucide-react";

export const userAccountFields = [
   {
      name: "username",
      placeholder: "Your username",
      icon: User,
      ariaLabel: "Your username",
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
      name: "avatar",
      placeholder: "Your avatar URL",
      icon: Image,
      ariaLabel: "Avatar URL",
      type: inputTypes.url,
   },
];
