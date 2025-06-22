import { Form, Formik } from "formik";
import { Lock } from "lucide-react";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "@/app/store/hooks";
import { useHead } from "@/shared/hooks/useHead";

import { InputField } from "@/shared/components/InputField/InputField";
import { Button } from "@/shared/components/Button/Button";
import { Loader } from "@/shared/components/Loader/Loader";

import {
   resetPasswordAuthThunk,
   validateResetTokenThunk,
} from "@/features/auth/model/auth.thunks";
import { resetPasswordSchema } from "@/features/auth/schemas/resetPasswordSchema";

import { Routes } from "@/shared/constants/routes";

import type { ResetPasswordPayload } from "@/features/auth/types/auth.types";

import "./reset-password-form.scss";

const initialValues = {
   password: "",
   confirmPassword: "",
};

export const ResetPasswordForm = () => {
   const [isValid, setIsValid] = useState<boolean | null>(null);
   const dispatch = useAppDispatch();
   const [searchParams] = useSearchParams();
   const navigate = useNavigate();

   const token = searchParams.get("token") as string;

   useHead({
      title: "Reset Password | B.A.R.K. - Book Archive Reading Kingdom",
      description:
         "Reset your password and get back to reading your favorite books.",
   });

   useEffect(() => {
      if (!token) {
         toast.warning(
            "Looks like the royal scroll got lost in transit. Please check your email and follow the correct link to reset your password."
         );
         navigate(Routes.home, { replace: true });
         return;
      }

      const validateToken = async () => {
         try {
            await dispatch(validateResetTokenThunk(token)).unwrap();

            setIsValid(true);
         } catch (err: unknown) {
            const error = err as { message: string };
            toast.error(error.message);
            setIsValid(false);
            navigate(Routes.home, { replace: true });
         }
      };

      validateToken();
   }, [token, navigate, dispatch]);

   if (isValid === null) return <Loader fullscreen={true} />;

   const resetPasswordHandler = async ({
      password,
      confirmPassword,
   }: ResetPasswordPayload) => {
      try {
         await dispatch(
            resetPasswordAuthThunk({
               payload: { password, confirmPassword },
               token,
            })
         ).unwrap();

         toast.success(
            `Password reset successfully! Welcome back to the Kingdom`
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
         validationSchema={resetPasswordSchema}
         onSubmit={resetPasswordHandler}
      >
         {({ isSubmitting }) => (
            <Form
               className="reset-password__form"
               autoComplete="off"
               aria-label="Reset password form"
            >
               <h4
                  className="reset-password__form-title"
                  aria-label="Reset your password?"
               >
                  Reset your password?
               </h4>

               <p
                  className="reset-password__form-text"
                  aria-label="Enter your new password to reset it."
                  role="text"
               >
                  Enter your new password to reset it.
               </p>

               <fieldset
                  className="reset-password__form-fieldset"
                  disabled={isSubmitting}
               >
                  <InputField
                     wrapperClassName="reset-password__input-wrapper"
                     inputClassName="reset-password__input"
                     iconClassName="reset-password__input-icon"
                     icon={Lock}
                     name="password"
                     type="password"
                     placeholder="New Password"
                     aria-label="Enter your new password"
                  />
                  <InputField
                     wrapperClassName="reset-password__input-wrapper"
                     inputClassName="reset-password__input"
                     iconClassName="reset-password__input-icon"
                     icon={Lock}
                     name="confirmPassword"
                     type="password"
                     placeholder="Confirm new Password"
                     aria-label="Confirm your new password"
                  />
                  <Button
                     className="reset-password__submit"
                     type="submit"
                     disabled={isSubmitting}
                     aria-label="Reset Password"
                     isActive={true}
                  >
                     {isSubmitting ? <Loader /> : "Reset Password"}
                  </Button>
               </fieldset>
            </Form>
         )}
      </Formik>
   );
};
