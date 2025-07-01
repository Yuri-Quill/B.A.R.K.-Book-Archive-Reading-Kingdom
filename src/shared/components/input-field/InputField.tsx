import { useMemo, useState } from "react";

import { Field, ErrorMessage } from "formik";

import { Eye, EyeClosed } from "lucide-react";

import { makeBem } from "@/shared/utils/makeBem/makeBem";

import type { FieldAttributes } from "formik";
import type { IconType } from "@/shared/types/common-props.type";

import "./input-field.scss";

interface InputFieldProps
   extends FieldAttributes<HTMLInputElement>,
      React.InputHTMLAttributes<HTMLInputElement> {
   icon?: IconType;
   modifier?: string;
   block: string;
}

export const InputField = ({
   modifier,
   block,
   icon: Icon,
   type,

   ...fieldProps
}: InputFieldProps) => {
   const [showPassword, setShowPassword] = useState(false);
   const isPassword = type === "password";
   const actualType = isPassword && showPassword ? "text" : type;

   const bem = useMemo(() => makeBem(block, modifier), [block, modifier]);

   return (
      <div className={bem("input-wrapper")}>
         {Icon && <Icon className={bem("input-icon")} size={20} />}

         <Field
            type={actualType}
            className={bem("input")}
            autoComplete="new-password"
            {...fieldProps}
         />

         {isPassword && (
            <button
               type="button"
               className={bem("input-toggle")}
               onClick={() => setShowPassword((p) => !p)}
               aria-label={showPassword ? "Hide password" : "Show password"}
            >
               {showPassword ? (
                  <Eye className={bem("toggle-icon")} size={20} />
               ) : (
                  <EyeClosed className={bem("toggle-icon")} size={20} />
               )}
            </button>
         )}

         <ErrorMessage
            name={fieldProps.name as string}
            component="div"
            className={bem("input-error")}
         />
      </div>
   );
};
