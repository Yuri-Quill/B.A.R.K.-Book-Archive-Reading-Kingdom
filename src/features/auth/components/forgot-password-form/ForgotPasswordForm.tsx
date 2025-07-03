import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "@/app/store/hooks";

import { forgotPasswordThunk } from "@/features/auth/model/auth.thunks";

import { EditableForm } from "@/shared/components/editable-form/EditableForm";

import { forgotPasswordSchema } from "@/features/auth/schemas/forgot-password-schema";

import { Routes } from "@/shared/constants/routes";

import { forgotPasswordFields } from "@/features/auth/data/auth.data";

import type { ForgotPasswordPayload } from "@/features/auth/types/auth.types";

import "./forgot-password-form.scss";

const initialValues = {
   email: "",
   clientURL: window.location.origin,
};

export const ForgotPasswordForm = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const forgotPasswordHandler = async (values: ForgotPasswordPayload) => {
      try {
         await dispatch(forgotPasswordThunk(values)).unwrap();
         toast.success(
            "We sent you an email with instructions on how to reset your password."
         );
         navigate(Routes.home, { replace: true });
      } catch (err: unknown) {
         const error = err as { message: string };
         toast.error(error.message);
      }
   };

   return (
      <article className="forgot-password__article">
         <header className="forgot-password__header">
            <h4
               className="forgot-password__header-title"
               aria-label="Forgot your password?"
            >
               Forgot your password?
            </h4>

            <p
               className="forgot-password__header-description"
               aria-label="Enter your email address and we'll send you a link to reset your password."
            >
               Enter your email address and we'll send you a link to reset your
               password.
            </p>
         </header>
         <EditableForm
            className="reset-password"
            fields={forgotPasswordFields}
            initialValues={initialValues}
            validationSchema={forgotPasswordSchema}
            onSubmit={forgotPasswordHandler}
            btnText="Submit"
         />
         <footer className="reset-password__footer">
            <Link
               className="reset-password__footer-link"
               to={Routes.authSignIn}
               aria-label="Redirect to sign in page!"
            >
               Do you remember your password?
            </Link>
         </footer>
      </article>
   );
};
