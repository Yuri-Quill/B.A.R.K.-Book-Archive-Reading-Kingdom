import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import type { AppError } from "@/shared/types/error";

import "./error-page.scss";
import { ButtonLink } from "@/shared/components/ButtonLink/ButtonLink";
import { ArrowBigLeft } from "lucide-react";

const ErrorPage = () => {
   const rawError = useRouteError();

   let error: Partial<AppError> = {
      message: "Unknown error",
      status: 500,
      statusText: "Something went wrong",
   };

   if (isRouteErrorResponse(rawError)) {
      error = {
         message: rawError.data?.message,
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
            <h3 className="error-page__status">{error.status}</h3>
            <p className="error-page__text">{error.statusText || error.message}</p>
            <ButtonLink
               className="error-page__btn-lnk"
               to="/"
               icon={<ArrowBigLeft />}
               children="Go Back"
               aria-label="Go back to Home page"
            />
         </article>
      </section>
   );
};

export default ErrorPage;
