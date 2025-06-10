import { Link } from "react-router-dom";

import clsify from "@/shared/utils/clsify";

import type { LinkProps } from "react-router-dom";
import type { IconProps } from "@/app/types/common";

import "./button-link.scss";

interface ButtonLinkProps extends LinkProps, IconProps {}

export const ButtonLink = ({ className, children, icon, ...rest }: ButtonLinkProps) => {
   return (
      <Link className={clsify("button-lnk", [], [className])} {...rest}>
         {icon && <span className="button-lnk__icon">{icon}</span>}
         {children}
      </Link>
   );
};
