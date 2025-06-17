import clsx from "clsx";

import "./loader.scss";

export const Loader = ({ fullPage = false }) => {
   if (fullPage) {
      return (
         <div
            className={clsx("loader-wrapper", { fullpage: fullPage })}
            role="dialog"
            aria-label="Loading content"
            aria-live="polite"
         >
            <div className="loader" role="status" aria-label="Loading" />
         </div>
      );
   }

   return <div className="loader" role="status" aria-label="Loading" />;
};
