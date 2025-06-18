import { SignInForm } from "@/features/auth/components/SignInForm/SignInForm";
import "./sign-in-page.scss";

const SignInPage = () => {
   return (
      <section className="sign-in__page">
         <SignInForm />
      </section>
   );
};

export default SignInPage;
