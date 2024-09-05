import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      const errors = {};

    
      if (!values.email) {
        errors.email = "field required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "field required";
      }
      return errors;
    },
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          id="emailField"
        />
      </div>
      <div id= "emailError">
      {formik.errors.email}
      </div>
      <div>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          id="pswField"
        />
      </div>
      <div id="pswError">
      {formik.errors.password}
      </div>

      <button id="submitBtn">Submit</button>
    </form>
  );
}

export default App;