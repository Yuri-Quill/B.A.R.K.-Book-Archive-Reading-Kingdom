import { ResetPasswordForm } from "@/features/auth/components/reset-password-form/ResetPasswordForm";
import { useHead } from "@/shared/hooks/use-head";

import "./reset-password-page.scss";

const ResetPasswordPage = () => {
   useHead({
      title: "Reset Password | B.A.R.K. - Book Archive Reading Kingdom",
      description:
         "Reset your password and get back to reading your favorite books.",
   });

   return (
      <section className="reset-password__page">
         <ResetPasswordForm />
      </section>
   );
};

export default ResetPasswordPage;
