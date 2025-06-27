import { Form, Formik } from "formik";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAppDispatch } from "@/app/store/hooks";


import { forgotPasswordThunk } from "@/features/auth/model/auth.thunks";

import { Button } from "@/shared/components/button/Button";
import { InputField } from "@/shared/components/input-field/InputField";
import { Loader } from "@/shared/components/loader/Loader";

import { forgotPasswordSchema } from "@/features/auth/schemas/forgot-password-schema";

import { Routes } from "@/shared/constants/routes";

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
      <Formik
         initialValues={initialValues}
         validationSchema={forgotPasswordSchema}
         onSubmit={forgotPasswordHandler}
      >
         {({ isSubmitting }) => (
            <Form
               className="forgot-password__form"
               autoComplete="off"
               aria-label="Forgot password form"
               role="form"
            >
               <h4
                  className="forgot-password__form-title"
                  aria-label="Forgot your password?"
               >
                  Forgot your password?
               </h4>

               <p
                  className="forgot-password__form-text"
                  aria-label="Enter your email address and we'll send you a link to reset your password."
                  role="text"
               >
                  Enter your email address and we'll send you a link to reset
                  your password.
               </p>

               <fieldset
                  className="forgot-password__form-fieldset"
                  disabled={isSubmitting}
               >
                  <InputField
                     wrapperClassName="forgot-password__input-wrapper"
                     inputClassName="forgot-password__input"
                     iconClassName="forgot-password__input-icon"
                     icon={Mail}
                     name="email"
                     type="email"
                     placeholder="Email Address"
                     aria-label="Enter your email address"
                  />
                  <Button
                     className="forgot-password__submit"
                     type="submit"
                     disabled={isSubmitting}
                     aria-label="Sign In"
                     isActive={true}
                  >
                     {isSubmitting ? <Loader /> : "Sign In"}
                  </Button>
               </fieldset>
            </Form>
         )}
      </Formik>
   );
};
