import { useAppSelector } from "@/app/store/hooks";
import "./user-account-form.scss";
import { useMemo } from "react";
import { EditableForm } from "@/shared/components/editable-form/EditableForm";
import { userAccountSchema } from "@/features/user/schemas/user-account-schema";
import { userAccountFields } from "@/features/user/data/user-account.data";

export const UserAccountForm = () => {
   const { user } =  useAppSelector((s)=> s.auth)

   const initialValues = useMemo(() => ({
      username: user?.username ?? '',
      email: user?.email ?? '',
      avatar: user?.avatar ?? '',
   }), [user])


   return (
      <section className="">
         <EditableForm
         fields={userAccountFields}
         className="user-account"
         initialValues={initialValues}
         validationSchema={userAccountSchema}
         onSubmit={()=> console.log('click')}
         btnText='submit'
         readOnly={true}
         />
      </section>
   );
};
