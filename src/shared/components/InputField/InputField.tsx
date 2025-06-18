import clsx from "clsx";
import { Field, ErrorMessage, type FieldAttributes } from "formik";

import { Eye, EyeClosed, type LucideProps } from "lucide-react";
import { useState } from "react";

import "./input-field.scss";

interface InputFieldProps
   extends FieldAttributes<HTMLInputElement>,
      React.InputHTMLAttributes<HTMLInputElement> {
   icon?: React.ComponentType<LucideProps>;
   modifier?: string;
   wrapperClassName?: string;
   iconClassName?: string;
   inputClassName?: string;
   errorClassName?: string;
}

export const InputField = ({
   modifier,
   wrapperClassName,
   iconClassName,
   inputClassName,
   errorClassName,
   icon: Icon,

   type,
   ...fieldProps
}: InputFieldProps) => {
   const [showPassword, setShowPassword] = useState(false);
   const isPassword = type === "password";
   const actualType = isPassword && showPassword ? "text" : type;

   return (
      <div
         className={clsx(
            "input-wrapper",
            wrapperClassName,
            modifier && `input-wrapper--${modifier}`
         )}
      >
         {Icon && (
            <Icon
               className={clsx(
                  "input__icon",
                  iconClassName,
                  modifier && `input__icon--${modifier}`
               )}
               size={20}
            />
         )}

         <Field
            type={actualType}
            className={clsx(
               "input",
               inputClassName,
               modifier && `input--${modifier}`
            )}
            autoComplete="new-password"
            {...fieldProps}

         />

         {isPassword && (
            <button
               type="button"
               className="input__toggle"
               onClick={() => setShowPassword((p) => !p)}
               aria-label={showPassword ? "Hide password" : "Show password"}
            >
               {showPassword ? (
                  <Eye className="input__toggle-icon" size={20} />
               ) : (
                  <EyeClosed  className="input__toggle-icon" size={20} />
               )}
            </button>
         )}

         <ErrorMessage
            name={fieldProps.name as string}
            component="div"
            className={clsx("input__error", errorClassName)}
         />
      </div>
   );
};
