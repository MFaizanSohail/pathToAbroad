import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../Signup/Schema";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
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
        <Navbar signup={"Log In"}/>{" "}
      </div>
      <div className="formbody">
        <div className="formcover">
          <div className="leftside"><img src="/img/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg" alt="" /></div>
          <form className="rightside" onSubmit={handleSubmit}>

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

            <button type="submit">Submit</button>
            <label className="haveaccount">Dont have an account !</label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
