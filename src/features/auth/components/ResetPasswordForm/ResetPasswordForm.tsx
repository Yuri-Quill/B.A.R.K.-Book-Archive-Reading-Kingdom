import { Form, Formik } from "formik";
import { Lock } from "lucide-react";
import { toast } from "react-toastify";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/app/store/hooks";
import { useHead } from "@/shared/hooks/useHead";

import { InputField } from "@/shared/components/InputField/InputField";
import { Button } from "@/shared/components/Button/Button";
import { Loader } from "@/shared/components/Loader/Loader";

import { Routes } from "@/shared/constants/routes";

import { resetPasswordSchema } from "@/features/auth/schemas/resetPasswordSchema";

import type { ResetPasswordPayload } from "@/features/auth/types/auth.types";

import "./reset-password-form.scss";
import { resetPasswordAuthThunk } from "@/features/auth/model/auth.thunks";

const initialValues = {
   password: "",
   confirmPassword: "",
};

export const ResetPasswordForm = () => {
   const dispatch = useAppDispatch();
   const [searchParams] = useSearchParams();
   const navigate = useNavigate();

   const token = searchParams.get("token") as string;

   useHead({
      title: "Reset Password | B.A.R.K. - Book Archive Reading Kingdom",
      description:
         "Reset your password and get back to reading your favorite books.",
   });

   const resetPasswordHandler = async ({
      password,
      confirmPassword,
   }: ResetPasswordPayload) => {
      try {
         const data = await dispatch(
            resetPasswordAuthThunk({
               payload: { password, confirmPassword },
               token,
            })
         );
         console.log(data);
         toast.success(`Password reset successfully!
                        Welcome back to theKingdom`);

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
            <article className="reset-password__form-wrapper">
               <h4
                  className="reset-password__title"
                  aria-label="Reset your password?"
               >
                  Reset your password?
               </h4>

               <p
                  className="reset-password__text"
                  aria-label="Enter your new password to reset it."
                  role="text"
               >
                  Enter your new password to reset it.
               </p>
               <Form
                  className="reset-password__form"
                  autoComplete="off"
                  aria-label="Reset password form"
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
               </Form>
            </article>
         )}
      </Formik>
   );
};
