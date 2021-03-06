import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const { history } = props;
  // Returns the form component and the error messages when the input field is touched and left empty, or just left empty
  return (
    <div className="login-container">
      <h1>Log In</h1>
      <Formik
        className="form-control"
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Please enter user's username"),
          password: Yup.string().required("Please enter user's password")
        })}
        onSubmit={values => {
          axiosWithAuth()
            .post("/users/login", values)
            .then(res => {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem('id', res.data.user.id)
              history.push(`/profile/${res.data.user.id}`);
            })
            .catch(err => window.alert('Sorry, an error occurred. Please check your login credentials and try again.'));
        }}
        render={({ errors, status, touched }) => (
          <Form className="login-form">
            <Field type="text" name="username" placeholder="Username" />
            {touched.username && errors.username && (
              <p className="error">{errors.username}</p>
            )}

            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            {touched.password && errors.password && (
              <p className="error">{errors.password}</p>
            )}

            <button type="submit">Log In</button>
          </Form>
        )}
      />
    </div>
  );
};

export default Login;
