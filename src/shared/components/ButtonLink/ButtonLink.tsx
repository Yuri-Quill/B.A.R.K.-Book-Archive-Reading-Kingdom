import { Link } from "react-router-dom";
import clsx from "clsx";

import type { IconProps } from "@/shared/types/props";
import type { LinkProps } from "react-router-dom";

import "./button-link.scss";

interface ButtonLinkProps extends LinkProps, IconProps {
   isActive?: boolean;
   modifier?: string;
}

export const ButtonLink = ({
   modifier,
   children,
   className,
   icon: Icon,
   isActive = false,
   ...rest
}: ButtonLinkProps) => {
   return (
      <Link
         className={clsx(
            "button-link",
            className && className,
            modifier && `button-link--${modifier}`,
            isActive && "button-link--active"
         )}
         {...rest}
      >
         {Icon && (
            <Icon
               className={clsx(
                  "button-link__image",
                  className && className,
                  modifier && `button-link__image--${modifier}`,
                  isActive && "button-link__image--active"
               )}
               size={20}
            />
         )}
         
         {children}
      </Link>
   );
};
