import { memo } from "react";
import { Link } from "react-router-dom";

import type { NavItem } from "@/features/header/header.types";

import "./header-actions.scss";
import clsify from "@/shared/utils/clsify";
interface HeaderActionsProps {
   items: NavItem[];
}

export const HeaderActions = memo(({ items }: HeaderActionsProps) => {
   const isActive: boolean = false;
   return (
      <nav className="header__actions">
         <ul className="header__actions-list">
            {items.map(({ id, link, icon: Icon, description }) => (
               <li className="header__actions-item" key={id}>
                  <Link
                     className="header__actions-link"
                     to={link}
                     aria-label={description}
                     title={description}
                  >
                     <Icon
                        className={clsify("header__actions-icon", [
                           isActive && "active",
                        ])}
                        size={20}
                     />
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
});
