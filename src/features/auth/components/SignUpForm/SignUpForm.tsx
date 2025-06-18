import { Form, Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useHead } from "@/shared/hooks/useHead";

import { signupAuthThunk } from "@/features/auth/model/auth.thunks";

import { InputField } from "@/shared/components/InputField/InputField";
import { Button } from "@/shared/components/Button/Button";
import { Loader } from "@/shared/components/Loader/Loader";

import { signUpSchema } from "@/features/auth/schemas/signUpSchema";

import { Routes } from "@/shared/constants/routes";

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

   useHead({
      title: "Sign Up | B.A.R.K. - Book Archive Reading Kingdom",
      description:
         "Join B.A.R.K. and manage your digital book collection. Organize, track, and explore your reading journey.",
   });

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
      <Formik
         initialValues={initialValues}
         validationSchema={signUpSchema}
         onSubmit={signUpHandler}
      >
         {({ isSubmitting }) => (
            <article className="signup-form__wrapper">
               <h4
                  className="signup-form__title"
                  aria-label="Join the Kingdom and start your journey"
               >
                  Join the Kingdom{" "}
                  <span className="signup-form__subtitle">
                     and start your journey!
                  </span>
               </h4>

               <p
                  className="signup-form__text"
                  aria-label="Sign up and explore your new realm of books"
                  role="text"
               >
                  Sign up and explore your new realm of books.
               </p>
               <Form
                  className="signup-form"
                  autoComplete="off"
                  aria-label="Sign up for an account"
                  role="form"
               >
                  <InputField
                     wrapperClassName="signup-input__wrapper"
                     inputClassName="signup-input"
                     iconClassName="signup-input__icon"
                     icon={User}
                     name="username"
                     type="text"
                     placeholder="Username"
                     aria-label="Enter your Username"
                  />
                  <InputField
                     wrapperClassName="signup-input__wrapper"
                     inputClassName="signup-input"
                     iconClassName="signup-input__icon"
                     icon={Mail}
                     name="email"
                     type="email"
                     placeholder="Email Address"
                     aria-label="Enter your email address"
                  />
                  <InputField
                     wrapperClassName="signup-input__wrapper"
                     inputClassName="signup-input"
                     iconClassName="signup-input__icon"
                     icon={Lock}
                     name="password"
                     type="password"
                     placeholder="Password"
                     aria-label="Enter your password"
                  />
                  <InputField
                     wrapperClassName="signup-input__wrapper"
                     inputClassName="signup-input"
                     iconClassName="signup-input__icon"
                     icon={Lock}
                     name="confirmPassword"
                     type="password"
                     placeholder="Confirm Password"
                     aria-label="Confirm your password"
                  />
                  <Button
                     className="signup-form__submit"
                     type="submit"
                     disabled={isSubmitting}
                     aria-label="Sign Up"
                     isActive={true}
                  >
                     {isSubmitting ? <Loader /> : "Sign Up"}
                  </Button>
               </Form>

               <Link
                  className="signup-form__link"
                  to={Routes.authSignIn}
                  aria-label=" You already have an account? Redirect to sign up page!"
               >
                  You already have an account?
               </Link>
            </article>
         )}
      </Formik>
   );
};
