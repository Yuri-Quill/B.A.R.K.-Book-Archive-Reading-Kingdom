import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Castle } from "lucide-react";

import { ButtonLink } from "@/shared/components/ButtonLink/ButtonLink";

import type { AppError } from "@/shared/types/error.type";

import "./error-page.scss";

const ErrorPage = () => {
   const rawError: unknown = useRouteError();

   let error: Partial<AppError> = {
      message: "Unknown error",
      status: 500,
      statusText: "Something went wrong",
   };

   if (isRouteErrorResponse(rawError)) {
      error = {
         message: rawError.data,
         status: rawError.status,
         statusText: rawError.statusText,
      };
   } else if (rawError instanceof Error) {
      error.message = rawError.message;
   }

   return (
      <section
         className="error-page"
         role="alert"
         aria-label={`Error ${error.status}: ${error.statusText}`}
      >
         <article className="error-page__wrapper">
            <h2 className="error-page__title">Oops, something went wrong!</h2>
            <h3 className="error-page__subtitle">{error.status}</h3>
            <p className="error-page__text">
               {error.message || error.statusText}
            </p>
            <ButtonLink
               className="error-page__btn-link"
               to="/"
               icon={Castle}
               children="Go Back"
               aria-label="Go back to Home page"
               isActive={true}
            />
         </article>
      </section>
   );
};

export default ErrorPage;
