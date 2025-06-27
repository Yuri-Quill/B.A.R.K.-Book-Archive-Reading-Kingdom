import { SignInForm } from "@/features/auth/components/sign-in-form/SignInForm";
import { useHead } from "@/shared/hooks/use-head";

import "./sign-in-page.scss";

const SignInPage = () => {
   useHead({
      title: "Sign In | B.A.R.K. - Book Archive Reading Kingdom",
      description:
         "Access your account at B.A.R.K. Digital Library and continue exploring your reading journey.",
   });

   return (
      <section className="sign-in__page">
         <SignInForm />
      </section>
   );
};

export default SignInPage;
