import { memo } from "react";
import { Link } from "react-router-dom";

import type { NavItem } from "@/features/header/header.types";

import "./header-actions.scss";

interface HeaderActionsProps {
   items: NavItem[];
}

export const HeaderActions = memo(({ items }: HeaderActionsProps) => {

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
                     <Icon className="header__actions-icon" size={20} />
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
});
