import clsx from "clsx";
import { Field, ErrorMessage, type FieldAttributes } from "formik";

import type { LucideProps } from "lucide-react";

interface InputFieldProps extends FieldAttributes<HTMLInputElement> {
   icon: React.ComponentType<LucideProps>;
   className?: string;
   name: string;
}

export const InputField = ({
   name,
   className,
   icon: Icon,
   ...rest
}: InputFieldProps) => {
   return (
      <div
         className={clsx(
            "input-wrapper",
            className && `input-wrapper--${className}`
         )}
      >
         <Field
            className={clsx("input", className && `input--${className}`)}
            name={name}
            {...rest}
         />
         <Icon
            className={clsx(
               "input__icon",
               className && `input__icon--${className}`
            )}
         />

         <ErrorMessage
            className={clsx(
               "input__error",
               className && `input__error--${className}`
            )}
            name={name}
            component="div"
         />
      </div>
   );
};
