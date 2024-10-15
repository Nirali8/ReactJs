import React from "react";
import * as Yup from "Yup";
import { useFormik } from "formik";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("FormData", values);
};

const validationSchema = Yup.object({
  // fullName: Yup.string().required("Required FullName")
  fullName: Yup.string().max(15, "no more than 15 char").required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string().required("Required"),
});

const YupValidation = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="h-lvh bg-orange-700">
      <h1 className="py-6 text-5xl underline">Formik Yup Validation </h1>
      <form className="py-24 text-3xl" onSubmit={formik.handleSubmit}>
        <label>FullName : </label>
        <input
          type="text"
          id="fullName"
          name=""
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          // console.log(formik.errors.fullName)
          
          formik.errors.fullName &&
            formik.touched.fullName ? (
          <div className=" text-black">{formik.errors.fullName}</div>
        ) : null
        }
        <br />
        <br />
        <br />
        <label>Email : </label>
        <input
          type="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange} onBlur={formik.handleBlur}
        ></input>
        {formik.errors.email && formik.touched.email ? (
          <div className="text-black">{formik.errors.email}</div>
        ) : null}
        <br />
        <br />
        <br />
        <label>Password : </label>
        <input
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange} onBlur={formik.handleBlur}
        ></input>
        {formik.errors.password && formik.touched.password ? (
          <div className=" text-black">{formik.errors.password}</div>
        ) : null}
        <br />
        <br />
        <br />
        <br />
        <button className="rounded-lg p-4 border bg-yellow-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default YupValidation;
