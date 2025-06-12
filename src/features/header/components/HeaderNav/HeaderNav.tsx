import { memo } from "react";
import { NavLink } from "react-router-dom";

import type { NavItem } from "@/features/header/header.types";

import "./header-nav.scss";

interface HeaderNavProps {
   items: NavItem[];
}

export const HeaderNav = memo(({ items }: HeaderNavProps) => (
   <nav className="header__nav" aria-label="Main navigation">
      <ul className="header__nav-list">
         {items.map(({ id, link, name, icon: Icon, description }) => (
            <li key={id} className="header__nav-item">
               <NavLink
                  to={link}
                  className="header__nav-link"
                  aria-label={description}
               >
                  <Icon className="header__nav-icon" aria-hidden="true" size={20}/>
                  <span className="header__nav-text" aria-hidden="true">
                     {name}
                  </span>
               </NavLink>
            </li>
         ))}
      </ul>
   </nav>
));
