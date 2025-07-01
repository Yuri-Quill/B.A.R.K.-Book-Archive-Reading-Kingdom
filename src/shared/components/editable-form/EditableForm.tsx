import { useMemo } from "react";
import { Form, Formik } from "formik";

import { InputField } from "@/shared/components/input-field/InputField";
import { Button } from "@/shared/components/button/Button";
import { Loader } from "@/shared/components/loader/Loader";

import { makeBem } from "@/shared/utils/makeBem/makeBem";

import type { FieldConfig } from "@/shared/types/forms.types";
import type { AnyObjectSchema } from "yup";
import type { FormikValues } from "formik";

import "./editable-form.scss";

interface EditableFormProps<V extends FormikValues> {
   fields: FieldConfig[];
   initialValues: V;
   validationSchema: AnyObjectSchema;
   className: string;
   modifier?: string;
   onSubmit: (values: V) => void | Promise<unknown>;
   btnText: string;
}

export const EditableForm = <V extends FormikValues>({
   fields,
   initialValues,
   validationSchema,
   className,
   modifier,
   onSubmit,
   btnText,
}: EditableFormProps<V>) => {
   const bem = useMemo(
      () => makeBem(className, modifier),
      [className, modifier]
   );

   return (
      <Formik<V>
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         {({ isSubmitting }) => (
            <Form className={bem("form")} autoComplete="off">
               <fieldset
                  className={bem("form-fieldset")}
                  disabled={isSubmitting}
                  aria-disabled={isSubmitting}
               >
                  {fields.map(
                     ({ name, placeholder, type, ariaLabel, icon: Icon }) => (
                        <InputField
                           key={String(name)}
                           block={className}
                           name={name as string}
                           type={type}
                           icon={Icon}
                           placeholder={placeholder}
                           aria-label={ariaLabel}
                           modifier={modifier}
                        />
                     )
                  )}
               </fieldset>
               <Button
                  className={bem("form-submit")}
                  disabled={isSubmitting}
                  type="submit"
                  isActive={true}
               >
                  {isSubmitting ? <Loader /> : btnText}
               </Button>
            </Form>
         )}
      </Formik>
   );
};
