import { InputField } from "@/shared/components/input-field/InputField";
import { Form, Formik } from "formik";
import "./user-account-form.scss";

export const UserAccountForm = () => {
   return (
      <Formik
         initialValues={{}}
         validationSchema={{}}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {({ isSubmitting }) => (
            <Form autoComplete="off">
               <fieldset disabled={isSubmitting}>
                  <InputField name="username" placeholder="Username" />
               </fieldset>
            </Form>
         )}
      </Formik>
   );
};
