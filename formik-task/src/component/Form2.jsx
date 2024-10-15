import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "Yup";

const initialValues = {
  userId: "",
  password: "",
  name: "",
  address: "",
  country: "",
  zipCode: "",
  email: "",
  sex: "",
  language: [],
  about: "",
};

// .error {
//   color: red;
//   font-size: 12px;
// }

// div {
//   margin-bottom: 10px;
// }

// label {
//   display: block;
//   font-weight: bold;
// }

// Yup validation schema
const registrationSchema = Yup.object().shape({
  userId: Yup.string()
    .required("User ID is required.")
    .min(5, "Must be between 5 and 12 characters.")
    .max(12, "Must be between 5 and 12 characters."),
  password: Yup.string()
    .required("Password is required.")
    .min(7, "Must be between 7 and 12 characters.")
    .max(12, "Must be between 7 and 12 characters."),
  name: Yup.string()
    .required("Name is required.")
    .matches(/^[a-zA-Z]+$/, "Name can only contain letters."),
  address: Yup.string(),
  country: Yup.string().required("Country is required."),
  zipCode: Yup.string()
    .required("ZIP Code is required.")
    .matches(/^\d+$/, "ZIP Code must be numeric."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required."),
  sex: Yup.string().required("Sex is required."),
  language: Yup.array()
    .min(1, "At least one language must be selected.")
    .required("Language is required."),
  about: Yup.string(),
});

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const Form2 = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label>User ID</label>
              <Field name="userId" />
              <ErrorMessage name="userId" component="div" className="text-red-700" />
            </div>

            <div>
              <label>Password</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="text-red-700" />
            </div>

            <div>
              <label>Name</label>
              <Field name="name" />
              <ErrorMessage name="name" component="div" className="text-red-700" />
            </div>

            <div>
              <label>Address (Optional)</label>
              <Field name="address" />
            </div>

            <div>
              <label>Country</label>
              <Field as="select" name="country">
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
              </Field>
              <ErrorMessage name="country" component="div" className="error" />
            </div>

            <div>
              <label>ZIP Code</label>
              <Field name="zipCode" />
              <ErrorMessage name="zipCode" component="div" className="error" />
            </div>

            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label>Sex</label>
              <Field type="radio" name="sex" value="Male" /> Male
              <Field type="radio" name="sex" value="Female" /> Female
              <ErrorMessage name="sex" component="div" className="error" />
            </div>

            <div>
              <label>Language</label>
              <Field type="checkbox" name="language" value="English" /> English
              <Field type="checkbox" name="language" value="Non-English" />{" "}
              Non-English
              <ErrorMessage name="language" component="div" className="error" />
            </div>

            <div>
              <label>About (Optional)</label>
              <Field as="textarea" name="about" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;
