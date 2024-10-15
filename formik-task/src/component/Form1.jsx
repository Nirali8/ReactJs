import React from "react";
import { useFormik } from "formik";

const initialValues = {
  name: '',
  email: '',
  school: '',
  phone: '',
  gender: '',
  course: '',
  location: '',
};

console.log("initialValues", initialValues);

const onSubmit = (values) => {
  console.log("formData", values);
};



const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }
  if (!values.school) errors.school = "Required";
   if (!values.phone) {
     errors.phone = "Enter Valid Number";
   } else if (!/^[0-9]{10,10}$/i.test(values.phone)) {
     errors.phone = "Invalid";
   } else if (values.phone.length < 10)
     errors.phone = "Phone should contain 10 numbers";
  if (!values.gender) errors.gender = "Required";
  if (!values.course) errors.course = "Required";
  if (!values.location) errors.location = "Required";
  return errors;
};

const Form1 = () => {

  const formik = useFormik(      
    {
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-[50%] m-auto p-16">
      <div className="bg-white w-full p-12 rounded-xl">
        <h1 className="text-center font-bold text-2xl text-pink-600 mb-4">
          Student Details Form
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="font-semibold">
                Name
              </label>
              <br />
              <input
                className="mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full"
                type="text"
                name="name"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <div className="h-4">
                {formik.errors.name ? (
                  <p className="bg-white">{formik.errors.name}</p>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <br />
              <input
                className="mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full"
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <div className="h-4">
                {formik.errors.email ? (
                  <p className="bg-white">{formik.errors.email}</p>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="school" className="font-semibold">
                School
              </label>
              <br />
              <input
                className="mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full"
                type="text"
                name="school"
                id="school"
                value={formik.values.school}
                onChange={formik.handleChange}
              />
              <div className="h-4">
                {formik.errors.school ? (
                  <p className="bg-white">{formik.errors.school}</p>
                ) : null}
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="font-semibold">
                Phone
              </label>
              <br />
              <input
                className="mt-2 mb-1 p-2 rounded border-2 border-gray-300 w-full"
                type="number"
                name="phone"
                id="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              <div className="h-4">
                {formik.errors.phone ? (
                  <p className="bg-white">{formik.errors.phone}</p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 my-5">
            {/* gender section */}
            <div>
              <p className="text-white">Gender</p>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={formik.handleChange}
              />
              <label htmlFor="male" className="text-white">
                male
              </label>

              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={formik.handleChange}
              />
              <label htmlFor="female" className="text-white">
                female
              </label>
              <br />
              <span className="mb-6">
                {formik.errors.gender ? (
                  <div className="text-red-300">*{formik.errors.gender}</div>
                ) : null}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-pink-600 text-white p-3 w-full mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
