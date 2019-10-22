import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const NewTrip = props => {
  const { history } = props;
  // Returns the form component and the error messages when the input field is touched and left empty, or just left empty
  return (
    <section>
      <h1>Add A Trip</h1>
      <form className="newtrip-form-container">
        <label for="tripDate">Trip Date</label>
        <input name="tripDate" type="date" />
        <input name="tripTitle" type="text" placeholder="Trip Title..." />
        <textarea
          name="tripDescription"
          type="text"
          placeholder="Trip description..."
        ></textarea>
        <input
          name="tripDuration"
          type="text"
          placeholder="Trip Duration (1 day, 2 weeks, etc)..."
        />
        <input
          name="tripDistance"
          type="text"
          placeholder="Trip Distance (3 miles)..."
        />
        <input
          name="tripType"
          type="text"
          placeholder="Excursion, cruise, hike, boating, etc..."
        />
        <button type="submit">Add Trip</button>
      </form>
    </section>
  );
};

export default NewTrip;
