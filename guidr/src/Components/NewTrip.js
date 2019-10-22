import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const NewTrip = props => {
  const { history } = props;
  // Returns the form component and the error messages when the input field is touched and left empty, or just left empty
  return (
    <section>
      <h1>Add A Trip</h1>
      <form>
        <input type="text" placeholder="Trip Title" />
        <textarea type="text" placeholder="Trip description..."></textarea>
        <button type="submit">Add Trip</button>
      </form>
    </section>
  );
};

export default NewTrip;
