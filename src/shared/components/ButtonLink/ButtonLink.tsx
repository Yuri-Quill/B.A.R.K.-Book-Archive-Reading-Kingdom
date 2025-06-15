import { Link } from "react-router-dom";

import clsify from "@/shared/utils/clsify";

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
      <Link className={clsify("button-lnk", [], [className])} {...rest}>
         {icon && <span className="button-lnk__icon">{icon}</span>}
         {children}
      </Link>
   );
};
