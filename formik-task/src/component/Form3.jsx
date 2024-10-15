import React from "react";
import { useFormik } from "formik";
import * as Yup from "Yup";

const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirm_password:""
}

const onSubmit = (values) => {
  console.log("formData", values);
};

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const validationSchema = Yup.object({
  userName: Yup.string()
    .min(3, "UserName must be between 3 and 25 characters.")
    .max(25)
    .required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string()
    .matches(passwordRules, {
      message:
        " Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (!@#$%^&*).",
    })
    .required("Required"),
  confirm_password: Yup
    .string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
const Form3 = () => {

     const formik = useFormik({
       initialValues,
       onSubmit,
       validationSchema,
     });
    
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign Up
        </h2>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* <!-- Username --> */}
          <div>
            <label className="block text-gray-700">UserName:</label>
            <input
              type="text"
              name="userName"
              className="w-full border border-red-500 p-2 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
            ></input>

            {formik.errors.userName ? (
              <p className="text-red-500 text-sm">{formik.errors.userName}</p>
            ) : null}
          </div>

          {/* <!-- Email --> */}
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full border border-green-500 p-2 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="hello@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            ) : null}
          </div>

          {/* <!-- Password --> */}
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full border border-red-500 p-2 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password ? (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            ) : null}
          </div>

          {/* <!-- Confirm Password --> */}
          <div>
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              name="confirm_password"
              className="w-full border border-red-500 p-2 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Reenter your password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
            />
            {formik.errors.confirm_password ? (
              <p className="text-red-500 text-sm">{formik.errors.confirm_password}</p>
            ) : null}
          </div>

          {/* <!-- Submit Button --> */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form3;
