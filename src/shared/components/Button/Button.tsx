import clsx from "clsx";

import type { IconProps } from "@/shared/types/common-props.type";

import "./button.scss";

interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      IconProps {
   isActive?: boolean;
   modifier?: string;
}

export const Button = ({
   icon: Icon,
   children,
   isActive,
   modifier,
   className,
   ...rest
}: ButtonProps) => {
   return (
      <button
         className={clsx(
            "button",
            className && className,
            isActive && `button--active`,
            modifier && `button--${modifier}`
         )}
         {...rest}
      >
         {Icon && (
            <Icon
               className={clsx(
                  "button__img",
                  className && className,
                  isActive && `button__icon--active`,
                  modifier && `button__icon--${modifier}`
               )}
            />
         )}
         {children}
      </button>
   );
};
