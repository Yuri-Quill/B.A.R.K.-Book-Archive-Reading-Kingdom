
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "@/app/store/hooks";

import { EditableForm } from "@/shared/components/editable-form/EditableForm";

import { signinAuthThunk } from "@/features/auth/model/auth.thunks";

import { signInSchema } from "@/features/auth/schemas/sign-in-schema";

import { Routes } from "@/shared/constants/routes";

import { signInFields } from "@/features/auth/data/auth.data";

import type { SigninPayload } from "@/features/auth/types/auth.types";

import "./sign-in-form.scss";

const initialValues = {
   email: "",
   password: "",
};

export const SignInForm = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const signInHandler = async (values: SigninPayload) => {
      try {
         await dispatch(signinAuthThunk(values)).unwrap();
         toast.success("Welcome back, to the Kingdom 👑");
         navigate(Routes.home, { replace: true });
      } catch (err) {
         const error = err as { message: string };
         toast.error(error.message);
      }
   };

   return (
      <article className="signin-article">
         <header className="signin-header">
            <h4
               className="signin-header__title"
               aria-label="Welcome back to the Kingdom"
            >
               Welcome back to the Kingdom!
            </h4>

            <p
               className="signin-header__description"
               aria-label="Log in and reclaim your reading throne"
               role="text"
            >
               Log in and reclaim your reading throne.
            </p>
         </header>

         <EditableForm
            className="signin"
            fields={signInFields}
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={signInHandler}
            btnText="Sign In"
         />

         <footer className="signin-footer">
            <Link
               className="signin-footer__link"
               to={Routes.authSignUp}
               aria-label="Don't have an account yet? Redirect to sign up page!"
            >
               Don't have an account yet?
            </Link>
            <Link
               className="signin-footer__link"
               to={Routes.authForgotPassword}
               aria-label="Forgot your password? Redirect to reset password page"
            >
               Forgot your password?
            </Link>
         </footer>
      </article>
   );
};
