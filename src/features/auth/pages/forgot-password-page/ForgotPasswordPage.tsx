import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form/ForgotPasswordForm";
import "./forgot-password-page.scss";

const ForgotPasswordPage = () => {
   return (
      <section className="forgot-password__page">
         <ForgotPasswordForm />
      </section>
   );
};

export default ForgotPasswordPage
