import React, {useContext} from "react";
import { Formik, Form, Field, Text } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";

const NewTrip = props => {
  const { history } = props;
  // Returns the form component and the error messages when the input field is touched and left empty, or just left empty
  return (
    <section>
      <h1>Add A Trip</h1>
      <Formik
        initialValues={{
          title: '',
          image: "img",
          description: "",
          isPrivate: false,
          isProfessional: false,
          duration: "",
          distance: "",
          date: '',
          tripType: ""
        }}
        validationSchema={Yup.object().shape({
          date: Yup.string().required("Please enter your trip start date"),
          title: Yup.string().required("Please enter your trip's title"),
          description: Yup.string().required(
            "Please enter details about your trip"
          ),
          duration: Yup.string().required(
            "Please enter the duration of your trip"
          ),
          distance: Yup.string().required(
            "Please enter the distance of your trip"
          ),
          tripType: Yup.string().required("Please enter type of your trip")
        })}
        onSubmit={values => {
          console.log(values)
          axiosWithAuth()
          .post(`users/${localStorage.getItem('id')}/trips`, {
            title: values.title,
            image: "img",
            description: values.description,
            isPrivate: false,
            isProfessional: false,
            duration: values.duration,
            distance: values.distance,
            date: values.date,
            tripType: values.tripType
          })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log('no new trip', err)
          })

        }}
        render={({ errors, status, touched }) => (
          <Form className="newtrip-form-container">
            <label htmlFor="date">Trip Date</label>
            <Field name="date" type="date" />
            {touched.date && errors.date && <p>{errors.date}</p>}

            <Field name="title" type="text" placeholder="Trip Title..." />
            {touched.title && errors.title && (
              <p className="error">{errors.title}</p>
            )}

            <Field
              name="description"
              type="text"
              placeholder="Trip description..."
              component="textarea"
            />
            {touched.description && errors.description && (
              <p className="error">{errors.description}</p>
            )}

            <Field
              name="duration"
              type="text"
              placeholder="Trip Duration (1 day, 2 weeks, etc)..."
            />
            {touched.duration && errors.duration && (
              <p className="error">{errors.duration}</p>
            )}

            <Field
              name="distance"
              type="text"
              placeholder="Trip Distance (3 miles)..."
            />
            {touched.distance && errors.distance && (
              <p className="error">{errors.distance}</p>
            )}

            <Field
              name="tripType"
              type="text"
              placeholder="Excursion, cruise, hike, boating, etc..."
            />
            {touched.tripType && errors.tripType && (
              <p className="error">{errors.tripType}</p>
            )}

            <button type="submit">Add Trip</button>
          </Form>
        )}
      />
    </section>
  );
};

export default NewTrip;
