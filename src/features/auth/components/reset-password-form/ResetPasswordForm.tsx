import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "@/app/store/hooks";

import { EditableForm } from "@/shared/components/editable-form/EditableForm";
import { Loader } from "@/shared/components/loader/Loader";

import {
   resetPasswordAuthThunk,
   validateResetTokenThunk,
} from "@/features/auth/model/auth.thunks";
import { resetPasswordSchema } from "@/features/auth/schemas/reset-password-schema";

import { Routes } from "@/shared/constants/routes";

import { resetPasswordFields } from "@/features/auth/data/auth.data";

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
      <article className="reset-password__article">
         <header className="reset-password__header">
            <h4
               className="reset-password__header-title"
               aria-label="Reset your password?"
            >
               Reset your password?
            </h4>

            <p
               className="reset-password__header-description"
               aria-label="Enter your new password to reset it."
               role="text"
            >
               Enter your new password to reset it.
            </p>
         </header>

         <EditableForm
            className="reset-password"
            fields={resetPasswordFields}
            initialValues={initialValues}
            validationSchema={resetPasswordSchema}
            onSubmit={resetPasswordHandler}
            btnText="Reset Password"
         />

         <footer className="reset-password__footer">
            <Link
               className="reset-password__footer-link"
               to={Routes.authSignIn}
               aria-label="Redirect to sign up page!"
            >
               Return to Sign in page.
            </Link>
         </footer>
      </article>
   );
};
