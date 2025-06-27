import { Form, Formik } from "formik";
import clsx from "clsx";

import {
   Cake,
   IdCard,
   Mailbox,
   Map,
   MapPinCheck,
   MapPinned,
   Phone,
   SquarePen,
   Transgender,
} from "lucide-react";

import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";

import { InputField } from "@/shared/components/input-field/InputField";

import { userProfileSchema } from "@/features/user/schemas/user-profile-schema";

import "./user-profile-form.scss";
import { Button } from "@/shared/components/button/Button";

export const UserProfileForm = () => {
   const { user } = useAppSelector((state) => state.auth);
   const [isDisabled, setIsDisabled] = useState(true);

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

   const toggleAccountInfoEditingHandler = () => {
      setIsDisabled((prev) => !prev);
   };
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={userProfileSchema}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {() => (
            <Form className="user-profile__form" autoComplete="off">
               <header className="user-profile__heading-wrapper">
                  <h4 className="user-profile__heading">Profile information</h4>
                  <button
                     className={clsx("user-profile__edit-btn", {
                        "user-profile__edit-btn--active": !isDisabled,
                     })}
                     onClick={toggleAccountInfoEditingHandler}
                     aria-label="Edit your account information"
                     title="Edit your account information"
                     type="button"
                  >
                     <span className="sr-only">Edit</span>
                     <SquarePen className="user-profile__edit-icon" />
                  </button>
               </header>
               <fieldset
                  className="user-profile__fieldset"
                  disabled={isDisabled}
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
               <Button
                  className={clsx("user-profile__save-btn", {
                     "user-profile__save-btn--active": !isDisabled,
                  })}
                  disabled={isDisabled}
                  isActive
                  type="submit"
               >
                  Save Changes
               </Button>
            </Form>
         )}
      </Formik>
   );
};
