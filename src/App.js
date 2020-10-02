import React from 'react';
import {Formik, useField} from 'formik';
import {Styles} from './Style';
import * as Yup from 'yup';

const CustomTextInput = ({label, ...props})=>{
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlfor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
const CustomCheckbox = ({children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}
const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlfor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

function App() {
  return (
    <Styles>
      <Formik
        initialValues={{
          name: "",
          email: "",
          acceptedTerms: false,
          state: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must at be at least 3 characters !")
            .max(10, "Must be 10 characters or less !")
            .required("Required!"),
          email: Yup.string()
            .email("Invalid email address !")
            .required("Required!"),
          acceptedTerms: Yup.boolean()
            .required("Required!")
            .oneOf([true], "You must accept the terms and conditions !"),
          state: Yup.string()
            .required("Required!")
            .oneOf(
              ["Admin", "Client", "Partner", "Guest", "Employee"],
              "Invalid !"
            ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <form className="container">
            <h1>Sign Up</h1>
            <CustomTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="your name"
            />
            <CustomTextInput
              label="Surname"
              name="surname"
              type="text"
              placeholder="your surname"
            />
            <CustomTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="xyz@example.com"
            />
            <CustomSelect label="State" name="state">
              <option value="">Select your state</option>
              <option value="Admin">Admin</option>
              <option value="Client">Client</option>
              <option value="Employee">Employee</option>
              <option value="Guest">Guest</option>
              <option value="Partner">Partner</option>
            </CustomSelect>
            <CustomCheckbox name="acceptedTerms">
              I accepted terms and conditions
            </CustomCheckbox>

            <button type="submit">
              {props.isSubmitting ? "Loading..." : "Submit"}
            </button>
          </form>
        )}
      </Formik>
    </Styles>
  );
}
export default App;
