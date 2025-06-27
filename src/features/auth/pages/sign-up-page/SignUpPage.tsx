import { SignUpForm } from "@/features/auth/components/sign-up-form/SignUpForm";
import { useHead } from "@/shared/hooks/use-head";

import "./sign-up-page.scss";

const SignUpPage = () => {
   useHead({
      title: "Sign Up | B.A.R.K. - Book Archive Reading Kingdom",
      description:
         "Join B.A.R.K. and manage your digital book collection. Organize, track, and explore your reading journey.",
   });

   return (
      <section className="sign-up__page">
         <SignUpForm />
      </section>
   );
};
export default SignUpPage;
