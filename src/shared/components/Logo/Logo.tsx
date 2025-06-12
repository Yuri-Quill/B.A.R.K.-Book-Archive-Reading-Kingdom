import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "@/shared/context/ThemeContext/ThemeContext";

import { ThemeMode } from "@/shared/constants/theme";

import DarkLogoImage from "@assets/logo/logo-dark-theme.webp";
import LightLogoImage from "@assets/logo/logo-light-theme.webp";

import type { ClassNameProps } from "@/app/types/common";

import "./logo.scss";
import clsify from "@/shared/utils/clsify";

export const Logo = ({ className }: ClassNameProps) => {
   const { theme } = useContext(ThemeContext);

   const LogoImage = theme === ThemeMode.Dark ? DarkLogoImage : LightLogoImage;

   return (
      <Link
         to="/"
         className={clsify("logo", [className && className])}
         aria-labelledby="site-name site-subtitle"
      >
         <img
            className="logo__image"
            src={LogoImage}
            alt="Reading Kingdom logo"
            width={32}
            height={42}
            aria-hidden="true"
         />

         <span className="logo__name">B.A.R.K.</span>
      </Link>
   );
};
