import { Form, Formik } from "formik";
import { Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "@/app/store/hooks";
import { useHead } from "@/shared/hooks/use-head";

import { Button } from "@/shared/components/Button/Button";
import { InputField } from "@/shared/components/InputField/InputField";
import { Loader } from "@/shared/components/Loader/Loader";

import { signinAuthThunk } from "@/features/auth/model/auth.thunks";

import { signInSchema } from "@/features/auth/schemas/sign-in-schema";

import { Routes } from "@/shared/constants/routes";

import type { SigninPayload } from "@/features/auth/types/auth.types";

import "./sign-in-form.scss";

const initialValues = {
   email: "",
   password: "",
};

export const SignInForm = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   useHead({
      title: "Sign In | B.A.R.K. - Book Archive Reading Kingdom",
      description:
         "Access your account at B.A.R.K. Digital Library and continue exploring your reading journey.",
   });

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
      <Formik
         initialValues={initialValues}
         validationSchema={signInSchema}
         onSubmit={signInHandler}
      >
         {({ isSubmitting }) => (
            <Form
               className="signin-form"
               autoComplete="off"
               aria-label="Sign in to your account"
               role="form"
            >
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

               <fieldset
                  className="signin-form__fieldset"
                  disabled={isSubmitting}
               >
                  <InputField
                     wrapperClassName="signin-input__wrapper"
                     inputClassName="signin-input"
                     iconClassName="signin-input__icon"
                     icon={Mail}
                     name="email"
                     type="email"
                     placeholder="Email Address"
                     aria-label="Enter your email address"
                     disabled={isSubmitting}
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

                  <div className="signin-form__links">
                     <Link
                        className="signin-form__link"
                        to={Routes.authSignUp}
                        aria-label="Don't have an account yet? Redirect to sign up page!"
                     >
                        Don't have an account yet?
                     </Link>
                     <Link
                        className="signin-form__link"
                        to={Routes.authForgotPassword}
                        aria-label="Forgot your password? Redirect to reset password page"
                     >
                        Forgot your password?
                     </Link>
                  </div>
               </fieldset>
            </Form>
         )}
      </Formik>
   );
};
