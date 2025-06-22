import { useAppSelector } from "@/app/store/hooks";
import { InputField } from "@/shared/components/input-field/InputField";
import { Form, Formik } from "formik";

import "./user-profile-form.scss";
export const UserProfileForm = () => {
   const { user } = useAppSelector((state) => state.auth);

   if (!user || !user.profile) return null;

   const profile = user.profile;

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
                  <InputField
                     name="Address"
                     placeholder="Address"
                     type="text"
                     value={profile.address}
                  />
               </fieldset>
            </Form>
         )}
      </Formik>
   );
};
