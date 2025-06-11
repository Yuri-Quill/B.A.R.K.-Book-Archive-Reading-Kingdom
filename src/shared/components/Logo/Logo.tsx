import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";

import { ThemeMode } from "@/shared/constants/theme";

import DarkLogoImage from "@assets/logo/logo-dark-theme.webp";
import LightLogoImage from "@assets/logo/logo-light-theme.webp";

import "./logo.scss";

export const Logo = () => {
   const { theme } = useContext(ThemeContext);

   const LogoImage = theme === ThemeMode.Dark ? DarkLogoImage : LightLogoImage;

   return (
      <Link to="/" className="logo" aria-labelledby="site-name site-subtitle">
         <img
            className="logo__image"
            src={LogoImage}
            alt="Reading Kingdom logo"
            width={32}
            height={42}
            aria-hidden="true"
         />

         <span className="logo__text-group">
            <span id="site-name" className="logo__name">
               B.A.R.K.
            </span>
            <span id="site-subtitle" className="logo__subtitle">
               Book Archive Reading Kingdom
            </span>
         </span>
      </Link>
   );
};
