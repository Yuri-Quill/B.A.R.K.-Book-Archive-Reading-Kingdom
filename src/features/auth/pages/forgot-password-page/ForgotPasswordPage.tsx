import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form/ForgotPasswordForm";
import { useHead } from "@/shared/hooks/use-head";

import "./forgot-password-page.scss";

const ForgotPasswordPage = () => {
   useHead({
      title: "Forgot password | B.A.R.K. - Book Archive Reading Kingdom",
      description: "Reset your password and get back to reading",
   });
   return (
      <section className="forgot-password__page">
         <ForgotPasswordForm />
      </section>
   );
};

export default ForgotPasswordPage;
