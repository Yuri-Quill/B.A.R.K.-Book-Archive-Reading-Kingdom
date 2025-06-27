import { Form, Formik } from "formik";
import clsx from "clsx";
import { User, Mail, SquarePen } from "lucide-react";

import { useState } from "react";
import { useAppSelector } from "@/app/store/hooks";

import { InputField } from "@/shared/components/input-field/InputField";
import { Button } from "@/shared/components/button/Button";

import { userAccountSchema } from "@/features/user/schemas/user-account-schema";

import "./user-account-form.scss";

export const UserAccountForm = () => {
   const [isDisabled, setIsDisabled] = useState(true);
   const { user } = useAppSelector((state) => state.auth);

   const initialValues = {
      username: user?.username,
      email: user?.email,
   };
   const toggleAccountInfoEditingHandler = () => {
      setIsDisabled((prev) => !prev);
   };

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={userAccountSchema}
         onSubmit={(values) => {
            setIsDisabled(true);
            console.log(values);
         }}
      >
         {() => (
            <Form className="user-account__form" autoComplete="off">
               <header className="user-account__heading-wrapper">
                  <h4 className="user-account__heading">Account information</h4>
                  <button
                     className={clsx("user-account__edit-btn", {
                        "user-account__edit-btn--active": !isDisabled,
                     })}
                     onClick={toggleAccountInfoEditingHandler}
                     aria-label="Edit your account information"
                     title="Edit your account information"
                     type="button"
                  >
                     <span className="sr-only">Edit</span>
                     <SquarePen className="user-account__edit-icon" />
                  </button>
               </header>

               <fieldset
                  className="user-account__fieldset"
                  disabled={isDisabled}
               >
                  <InputField
                     inputClassName="user-account__input"
                     name="username"
                     placeholder="Username"
                     wrapperClassName="user-account__wrapper"
                     iconClassName="user-account__icon"
                     icon={User}
                     type="text"
                     aria-label="Your username!"
                  />
                  <InputField
                     inputClassName="user-account__input"
                     name="email"
                     placeholder="Email"
                     wrapperClassName="user-account__wrapper"
                     iconClassName="user-account__icon"
                     icon={Mail}
                     type="email"
                     aria-label="Your email address"
                  />
               </fieldset>
               <Button
                  className={clsx("user-account__save-btn", {
                     "user-account__save-btn--active": !isDisabled,
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
