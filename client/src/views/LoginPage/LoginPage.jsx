import React, { Fragment, useState } from "react";
import styles from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error˝");
      }
    });
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Fragment>
      <h2 className={styles.title}>Sign in</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        <div>
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
        </div>
        <button type="submit" className={styles.view}>
          Sign In
        </button>
        <NavLink to="/register" className={styles.link}>
          Not Registered?
        </NavLink>
      </form>
    </Fragment>
  );
};

export default LoginPage;
