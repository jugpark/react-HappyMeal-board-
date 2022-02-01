import React, { useState, Fragment } from "react";
import styles from "./RegisterPage.module.css";
import { NavLink } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      id: id,
      password: password,
      email: email,
    };
    console.log(data);
  };

  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
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
            <div>Email</div>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={emailChangeHandler}
            />
          </div>
          <button onSubmit={submitHandler} className={styles.view}>Register</button>
          <NavLink to="/login" className={styles.link}>
            Already Registered?
          </NavLink>
        </form>
      </Fragment>
    </div>
  );
}

export default RegisterPage;
