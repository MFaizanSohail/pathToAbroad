import React from "react";
import "./Signup.scss";
import { useFormik } from "formik";
import { signUpSchema } from "./Schema";
import Navbar from "../../components/Navbar/Navbar";
import Registered from "./Registered";

const Signup = () => {
  const registered= true;

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="signupform">
      <div className="navbar">
        <Navbar signup={"Sign Up"}/>{" "}
      </div>
      <div className="formbody">
        <div className="formcover">
          <div className="leftside"><img src="/img/marissa-grootes-TVllFyGaLEA-unsplash.jpg" alt="" /></div>
          {registered? <Registered/> : <form className="rightside" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input autoFocus
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}

            <label htmlFor="password">Password </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}

            <label htmlFor="confirm_password">Confirm password</label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              onChange={handleChange}
              value={values.confirm_password}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error">{errors.confirm_password}</p>
            ) : null}

            <button type="submit">Submit</button>
            <label className="haveaccount">All ready have account !</label>
          </form>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
