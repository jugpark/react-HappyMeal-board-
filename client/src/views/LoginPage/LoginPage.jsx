import React, { Fragment, useState } from "react";
import styles from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      id: id,
      password: password,
    };
    console.log(data);
  };

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Fragment>
      <h2 className={styles.title}>Sign in</h2>
      <form onSubmit={submitHandler} className={styles.form}>
        <div>
          <div>Id</div>
          <input
            className={styles.input}
            type="id"
            placeholder="Enter id"
            value={id}
            onChange={idChangeHandler}
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
        <button className={styles.view}>Sign In</button>
        <NavLink to="/register" className={styles.link}>
          Not Registered?
        </NavLink>
      </form>
    </Fragment>
  );
};

export default LoginPage;
