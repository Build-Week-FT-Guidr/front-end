import React from "react";
import { Formik, Form, Field, Text } from "formik";
import * as Yup from "yup";

const NewTrip = props => {
  const { history } = props;
  // Returns the form component and the error messages when the input field is touched and left empty, or just left empty
  return (
    <section>
      <h1>Add A Trip</h1>
      <Formik
        initialValues={{
          tripDate: "",
          tripTitle: "",
          tripDescription: "",
          tripDuration: "",
          tripDistance: "",
          tripType: ""
        }}
        validationSchema={Yup.object().shape({
          tripDate: Yup.string().required("Please enter your trip start date"),
          tripTitle: Yup.string().required("Please enter your trip's title"),
          tripDescription: Yup.string().required(
            "Please enter details about your trip"
          ),
          tripDuration: Yup.string().required(
            "Please enter the duration of your trip"
          ),
          tripDistance: Yup.string().required(
            "Please enter the distance of your trip"
          ),
          tripType: Yup.string().required("Please enter type of your trip")
        })}
        onSubmit={values => {
          console.log(values);
        }}
        render={({ errors, status, touched }) => (
          <Form className="newtrip-form-container">
            <label htmlFor="tripDate">Trip Date</label>
            <Field name="tripDate" type="date" />
            {touched.tripDate && errors.tripDate && <p>{errors.tripDate}</p>}

            <Field name="tripTitle" type="text" placeholder="Trip Title..." />
            {touched.tripTitle && errors.tripTitle && (
              <p className="error">{errors.tripTitle}</p>
            )}

            <Field
              name="tripDescription"
              type="text"
              placeholder="Trip description..."
              component="textarea"
            />
            {touched.tripDescription && errors.tripDescription && (
              <p className="error">{errors.tripDescription}</p>
            )}

            <Field
              name="tripDuration"
              type="text"
              placeholder="Trip Duration (1 day, 2 weeks, etc)..."
            />
            {touched.tripDuration && errors.tripDuration && (
              <p className="error">{errors.tripDuration}</p>
            )}

            <Field
              name="tripDistance"
              type="text"
              placeholder="Trip Distance (3 miles)..."
            />
            {touched.tripDistance && errors.tripDistance && (
              <p className="error">{errors.tripDistance}</p>
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
