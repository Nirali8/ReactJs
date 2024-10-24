import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { getFormDataFromLocalStorage } from "../auth/auth";

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 character")
      .required("Password is Required"),
  });

  const handleSubmit = (values, { isSubmitting, isError }) => {
    const user = getFormDataFromLocalStorage(user.email);
    if (user && user.password === values.password) {
      localStorage.setItem("authenticate", true);
      navigate("/");
    } else {
      isError({ password: "Inavlid Email And Password" });
    }
    isSubmitting(false);
  };

  return (
    <div>
      <h1 className="heading">This is Login page</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {(isSubmitting) => (
          <Form>
            <div>
              <label htmlFor="">Email</label>
              <Field name="email" type="email"></Field>
              <ErrorMessage name="email" component="div"></ErrorMessage>
            </div>
            <div>
              <label>Password</label>
              <Field name="password" type="password"></Field>
              <ErrorMessage name="password"></ErrorMessage>
            </div>
            <button className="btn" type="submit" disabled={isSubmitting}>
              SignUp
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
