import { Form, Formik } from "formik";
import { Navigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/app/store/hooks";

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
   const { isAuthenticated } = useAppSelector((state) => state.auth);
   const dispatch = useAppDispatch();

   if (isAuthenticated) {
      return <Navigate to={Routes.home} replace />;
   }
   const signUpHandler = async (values: SignupPayload) => {
      try {
         await dispatch(signupAuthThunk(values)).unwrap();
         toast.success("Welcome to the Kingdom, 👑");
      } catch (err) {
         const error = err as { message: string };
         toast.error(error.message);
         console.log(error);
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
               <Form autoComplete="off">
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
            </article>
         )}
      </Formik>
   );
};
