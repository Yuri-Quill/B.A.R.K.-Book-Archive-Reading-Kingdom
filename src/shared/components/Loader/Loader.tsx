import clsify from "@/shared/utils/clsify";
import "./loader.scss";

export const Loader = ({ fullPage = false }) => {
   if (fullPage) {
      return (
         <div
            className={clsify("loader-wrapper", [fullPage && "fullpage"])}
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
