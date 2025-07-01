import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "@/app/store/hooks";

import { signupAuthThunk } from "@/features/auth/model/auth.thunks";
import { EditableForm } from "@/shared/components/editable-form/EditableForm";

import { signUpSchema } from "@/features/auth/schemas/sign-up-schema";

import { Routes } from "@/shared/constants/routes";

import { signUpFields } from "@/features/auth/data/auth.data";

import type { SignupPayload } from "@/features/auth/types/auth.types";

import "./sign-up-form.scss";

const initialValues = {
   username: "",
   email: "",
   password: "",
   confirmPassword: "",
};

export const SignUpForm = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const signUpHandler = async (values: SignupPayload) => {
      try {
         await dispatch(signupAuthThunk(values)).unwrap();
         toast.success("Welcome to the Kingdom 👑");
         navigate(Routes.home, { replace: true });
      } catch (err) {
         const error = err as { message: string };
         toast.error(error.message);
      }
   };

   return (
      <article className="signup-article">
         <header className="signup-header">
            <h3 className="signup-header__title">
               Join the Kingdom
               <span className="signup-header__subtitle">
                  and start your journey
               </span>
            </h3>
            <p className="signup-header__description">
               Sign up and explore your new realm of books.
            </p>
         </header>

         <EditableForm
            className="signup"
            fields={signUpFields}
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={signUpHandler}
            btnText="Sign Up"
         />
         <footer className="signup__form-footer">
            <Link
               className="signup__form-link"
               to={Routes.authSignIn}
               aria-label=" You already have an account? Redirect to sign up page!"
            >
               You already have an account?
            </Link>
         </footer>
      </article>
   );
};
