export const inputTypes = [
   "text",
   "password",
   "email",
   "number",
   "date",
   "tel",
   "url",
   "search",
   "checkbox",
   "radio",
   "textarea",
   "hidden",
] as const;

export type InputType = (typeof inputTypes)[number];
