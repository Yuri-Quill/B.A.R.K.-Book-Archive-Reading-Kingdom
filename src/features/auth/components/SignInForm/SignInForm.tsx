import { Link, Navigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

import { InputField } from "@/shared/components/InputField/InputField";
import { Button } from "@/shared/components/Button/Button";
import { Loader } from "@/shared/components/Loader/Loader";

import { signinAuthThunk } from "@/features/auth/model/auth.thunks";

import { signInSchema } from "@/features/auth/schemas/signInSchema";

import { Routes } from "@/shared/constants/routes";

import type { SigninPayload } from "@/features/auth/types/auth.types";

import "./sign-in-form.scss";

const initialValues = {
   email: "",
   password: "",
};

export const SignInForm = () => {
   const dispatch = useAppDispatch();
   const { isAuthenticated } = useAppSelector((state) => state.auth);

   if (isAuthenticated) {
      return <Navigate to={Routes.home} replace />;
   }

   const signInHandler = async (values: SigninPayload) => {
      try {
         await dispatch(signinAuthThunk(values)).unwrap();
         toast.success("Welcome back, 👑");
      } catch (err) {
         const error = err as { message: string };
         toast.error(error.message);
      }
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={signInSchema}
         onSubmit={signInHandler}
      >
         {({ isSubmitting }) => (
            <article className="signin-form__wrapper">
               <h4
                  className="signin-form__title"
                  aria-label="Welcome back to the Kingdom"
               >
                  Welcome back to the Kingdom!
               </h4>

               <p
                  className="signin-form__text"
                  aria-label="Log in and reclaim your reading throne"
                  role="text"
               >
                  Log in and reclaim your reading throne.
               </p>

               <Form className="signin-form" autoComplete="off">

                  <InputField
                     wrapperClassName="signin-input__wrapper"
                     inputClassName="signin-input"
                     iconClassName="signin-input__icon"
                     icon={Mail}
                     name="email"
                     type="email"
                     placeholder="Email Address"
                     aria-label="Enter your email address"
                  />
                  <InputField
                     wrapperClassName="signin-input__wrapper"
                     inputClassName="signin-input"
                     iconClassName="signin-input__icon"
                     icon={Lock}
                     name="password"
                     type="password"
                     placeholder="Password"
                     aria-label="Enter your password"
                  />
                  <Button
                     className="signin-form__submit"
                     type="submit"
                     disabled={isSubmitting}
                     aria-label="Sign In"
                     isActive={true}
                  >
                     {isSubmitting ? <Loader /> : "Sign In"}
                  </Button>
               </Form>
               <Link className="signin-form__link" to={Routes.authSignUp}>
                  Don`t have account yet?
               </Link>
            </article>
         )}
      </Formik>
   );
};
