import { Formik, Form } from "formik";

import { Button } from "@/shared/components/Button/Button";
import { Loader } from "@/shared/components/Loader/Loader";

import "./sign-in-form.scss";
import { InputField } from "@/shared/components/InputField/InputField";
import { Mail, Lock } from "lucide-react";
import { signInSchema } from "@/features/auth/schemas/signInSchema";

const initialValues = {
   email: "",
   password: "",
};

export const SignInForm = () => {
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={signInSchema}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {({ isSubmitting }) => (
            <article className="signin-form__wrapper">
               <Form className="signin-form">
                  <InputField
                     wrapperClassName="signin-input__wrapper"
                     inputClassName="signin-input"
                     iconClassName="signin-input__icon"
                     icon={Mail}
                     name="email"
                     type="email"
                     placeholder="Email Address"
                     aria-label="Enter your email address"
                  />
                  <InputField
                     wrapperClassName="signin-input__wrapper"
                     inputClassName="signin-input"
                     iconClassName="signin-input__icon"
                     icon={Lock}
                     name="password"
                     type="password"
                     placeholder="Password"
                     aria-label="Enter your password"
                  />
                  <Button
                     className="signin-form__submit"
                     type="submit"
                     disabled={isSubmitting}
                     aria-label="Sign In"
                     isActive={true}
                  >
                     {isSubmitting ? <Loader /> : "Sign In"}
                  </Button>
               </Form>
            </article>
         )}
      </Formik>
   );
};
