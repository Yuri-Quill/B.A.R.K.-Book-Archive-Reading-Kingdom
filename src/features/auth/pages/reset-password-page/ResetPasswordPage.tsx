import { ResetPasswordForm } from "@/features/auth/components/reset-password-form/ResetPasswordForm";
import "./reset-password-page.scss";

const ResetPasswordPage = () => {
   return (
      <section className="reset-password__page">
         <ResetPasswordForm />
      </section>
   );
};

export default ResetPasswordPage;
