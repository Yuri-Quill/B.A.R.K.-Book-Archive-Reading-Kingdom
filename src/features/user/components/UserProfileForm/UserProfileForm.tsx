import { Form, Formik } from 'formik'
import './UserProfileForm'


export const UserProfileForm = () => {
   return (
<Formik
initialValues={{}}
validationSchema={{}}
onSubmit={(values)=>{
   console.log(values);
}}
>
   {({isSubmitting})=>(
      <Form className='' autoComplete='off'>
         <fieldset className='' disabled={isSubmitting}  >

         </fieldset>
      </Form>
   )}
</Formik>
   )
}
