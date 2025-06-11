import { Link } from "react-router-dom";

import LogoImage from "@assets/logo/logo-small.png";

import "./logo.scss";

export const Logo = () => {
   return (
      <Link to="/" className="logo" aria-labelledby="site-name site-subtitle">
         <img
            className="logo__image"
            src={LogoImage}
            alt="Reading Kingdom logo"
            width={32}
            height={32}
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
