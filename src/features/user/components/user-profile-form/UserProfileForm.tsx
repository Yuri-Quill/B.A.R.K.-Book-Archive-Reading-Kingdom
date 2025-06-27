import { useAppSelector } from "@/app/store/hooks";
import { InputField } from "@/shared/components/input-field/InputField";
import { Form, Formik } from "formik";

import "./user-profile-form.scss";
import {
   Cake,
   IdCard,
   Mailbox,
   Map,
   MapPinCheck,
   MapPinned,
   Phone,
   Transgender,
} from "lucide-react";
import { userProfileSchema } from "@/features/user/schemas/user-profile-schema";
export const UserProfileForm = () => {
   const { user } = useAppSelector((state) => state.auth);

   const initialValues = {
      firstName: user?.profile.firstName,
      lastName: user?.profile.lastName,
      gender: user?.profile.gender,
      birthDate: user?.profile.birthDate,
      phone: user?.profile.phone,
      country: user?.profile.country,
      city: user?.profile.city,
      address: user?.profile.address,
      zipCode: user?.profile.zipCode,
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={userProfileSchema}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {({ isSubmitting }) => (
            <Form className="user-profile__form" autoComplete="off">
               <fieldset
                  className="user-profile__fieldset"
                  disabled={isSubmitting}
               >

                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={IdCard}
                     name="firstName"
                     placeholder="First Name"
                     type="text"
                     aria-label="Your First Name"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={IdCard}
                     name="lastName"
                     placeholder="Last Name"
                     type="text"
                     aria-label="Your Last Name"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={Transgender}
                     name="gender"
                     placeholder="Gender"
                     type="select"
                     aria-label="Your Gender"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={Cake}
                     name="birthDate"
                     placeholder="Birthdate"
                     type="date"
                     aria-label="Your Birthdate"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={Phone}
                     name="phone"
                     placeholder="Phone Number"
                     type="tel"
                     aria-label="Your Address"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={Map}
                     name="country"
                     placeholder="Country"
                     type="text"
                     aria-label="Your Country"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={MapPinned}
                     name="city"
                     placeholder="City"
                     type="text"
                     aria-label="Your City"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={MapPinCheck}
                     name="address"
                     placeholder="Address"
                     type="text"
                     aria-label="Your Address"
                  />
                  <InputField
                     inputClassName="user-profile__input"
                     wrapperClassName="user-profile__wrapper"
                     iconClassName="user-profile__icon"
                     icon={Mailbox}
                     name="zipCode"
                     placeholder="zipCode"
                     type="text"
                     aria-label="Your zipCode"
                  />
               </fieldset>
            </Form>
         )}
      </Formik>
   );
};
