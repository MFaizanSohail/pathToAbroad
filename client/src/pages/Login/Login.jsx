import React, { useState } from "react";
import { useFormik } from "formik"; 
import Navbar from "../../components/Navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import { loginSchema } from "./LoginSchema";

const Login = () => { 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log(values);
        return <Navigate to={'/'}/>
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
            <input placeholder="Email Address"
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

            <input placeholder="Enter Password" 
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
            <label className="haveaccount"><Link  to={'/signup'}>Dont have an account ! </Link></label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
