import React, { useState, Fragment } from "react";
import styles from "./RegisterPage.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userAction";

function RegisterPage(props) {
  const dispatch = useDispatch();

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

    if (password !== confirmPassword) {
      return alert("passwords should be same")
    }

    const body = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(register(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
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
