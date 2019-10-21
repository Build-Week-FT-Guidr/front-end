import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = ({ values, touched, errors, status }) => {
  // Returns the form component and the error messages when the input field is touched and left empty, or just left empty
  return (
    <div className="container">
      <h1>Log In</h1>
      <Form className="form-control">
        <Field type="email" name="email" placeholder="E-mail" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <Field type="password" name="password" placeholder="Enter Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Log In</button>
      </Form>
    </div>
  );
};

const FormikFormComponent = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  // Tests if the errors exist
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please enter user's email"),
    password: Yup.string().required("Please enter user's password")
  })
})(Login);

export default FormikFormComponent;
