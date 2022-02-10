import React, { useState, Fragment } from "react";
import styles from "./RegisterPage.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/userAction";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordChangeHandler = (event) => {
    setConfirmPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      return alert("passwords should be same")
    }

    const body = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Failed to Sign up");
      }
    });
  };

  return (
    <div>
      <Fragment>
        <h2 className={styles.title}>Register</h2>
        <form onSubmit={submitHandler} className={styles.form}>
          <div>
            <div>Name</div>
            <input
              className={styles.input}
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={nameChangeHandler}
            />
            <div>Email</div>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={emailChangeHandler}
            />
            <div>Password</div>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={passwordChangeHandler}
            />
            <div>Confirm Password</div>
            <input
              className={styles.input}
              type="password"
              placeholder="Enter password"
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
            />
          </div>
          <button onSubmit={submitHandler} className={styles.view}>
            Register
          </button>
          <NavLink to="/login" className={styles.link}>
            Already Registered?
          </NavLink>
        </form>
      </Fragment>
    </div>
  );
}

export default RegisterPage;
