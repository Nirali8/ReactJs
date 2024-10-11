import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from "Yup"

const initialValues = {
    fullName:"",
    email:"",
    password:""
}

const onSubmit = values =>
{
    console.log("Form Data",values);
}

const validationSchema = Yup.object({
    fullName: Yup.string().max(10, "Not more than 10 Letter").required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password:Yup.string().min(5,"min 5 letter").required("required")
})

const FormikField = () => {
  return (
    <div className="h-lvh bg-orange-700">
      <h1 className="py-6 text-5xl underline">Formik Yup Validation </h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="py-24 text-3xl">
          <label>FullName : </label>
          <Field type="text" id="fullName" name="fullName"></Field>
          <br />
          <ErrorMessage name="fullName"></ErrorMessage>
          <br />
          <label>Email : </label>
          <Field type="email" id="email" name="email"></Field>
          <br />
          <ErrorMessage name="email"></ErrorMessage>
          <br />
          <label>Password : </label>
          <Field type="password" id="password" name="password"></Field>
          <br />
          <ErrorMessage name="password"></ErrorMessage>
          <br />
          <br />
          <button type="submit" className="rounded-lg p-4 border bg-yellow-300">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikField
