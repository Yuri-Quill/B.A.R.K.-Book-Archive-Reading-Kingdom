export const inputTypes = {
   text: "text",
   password: "password",
   email: "email",
   number: "number",
   date: "date",
   tel: "tel",
   url: "url",
   search: "search",
   checkbox: "checkbox",
   radio: "radio",
   textarea: "textarea",
   hidden: "hidden",
} as const;

export type InputType = (typeof inputTypes)[keyof typeof inputTypes];
