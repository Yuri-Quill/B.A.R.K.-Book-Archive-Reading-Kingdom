import { Link } from "react-router-dom";
import clsx from "clsx";

import type { IconProps } from "@/shared/types/props";
import type { LinkProps } from "react-router-dom";

import "./button-link.scss";

interface ButtonLinkProps extends LinkProps, IconProps {}

export const ButtonLink = ({
   className,
   children,
   icon,
   ...rest
}: ButtonLinkProps) => {
   return (
      <Link className={clsx("button-link", className)} {...rest}>
         {icon && <span className="button-lnk__icon">{icon}</span>}
         {children}
      </Link>
   );
};
