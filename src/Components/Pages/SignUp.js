import React from "react";
import "../../App.css";
import "../../App";
import "../Form/Form.css";
import useForm from "../Form/useForm";
import validate from "../Form/validateInfo";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import Button from "../Button/Button";
// import { auth } from "../../firebase";

const SignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
 
  return (
    <div className="login__window">
      <div className="login">
        <div className="login__container">
          <h1>Sign Up</h1>
          <form
            className="form"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xaylpqeo"
            method="POST"
          >
            <div className="input_style">
              <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  id="first_name"
                />
                {errors.first_name && <p>{errors.first_name}</p>}
              </FormControl>
            </div>

            <div className="input_style">
              <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input
                  type="text"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  id="last_name"
                />
                {errors.last_name && <p>{errors.last_name}</p>}
              </FormControl>
            </div>

            <div className="input_style">
              <FormControl>
                <InputLabel>Email</InputLabel>
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                />
                {errors.email && <p>{errors.email}</p>}
              </FormControl>
            </div>

            {/* <div className="input_style">
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                />
                {errors.password && <p>{errors.password}</p>}
              </FormControl>
            </div> */}

            <div className="input_style">
              <FormControl>
                <InputLabel>Mobile No</InputLabel>
                <Input
                  type="number"
                  name="mobile_no"
                  placeholder="Optional"
                  value={values.mobile_no}
                  onChange={handleChange}
                  id="mobile_no"
                />
              </FormControl>
              {errors.mobile_no && <p>{errors.mobile_no}</p>}
            </div>

            <Button type="submit" buttonStyle="btn--sign-in">
              Submit
            </Button>
          </form>
          <p>
            By signing-in you agree to the
            <span className="login__span"> ARS Bolts & Nuts</span>'s terms and
            Conditions of Use & Sale. Please see our Privacy Notice, our Cookies
            Notice and our Interest-Based Ads Notice.
          </p>
        </div>
        {/* <div className="login__createAccount">
          <p>
            New to <span span className="login__span">
               ARS Bolts & Nuts
            </span>
            ?
          </p>
          <button type="submit" buttonStyle="btn--sign-in">Create your new Account</button>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
