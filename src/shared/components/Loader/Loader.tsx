import clsx from "clsx";

import "./loader.scss";

export const Loader = ({ fullscreen = false }) => {
   return (
      <div
         className={clsx("loader-wrapper", {
            "loader-wrapper--fullscreen": fullscreen,
         })}
         role="dialog"
         aria-label="Loading content"
         aria-live="polite"
      >
         <div className="loader" role="status" aria-label="Loading" />
      </div>
   );
};
