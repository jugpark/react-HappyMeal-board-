import React, { Fragment, useState } from "react";
import styles from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userAction";
import { withRouter } from 'react-router-dom';


const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    userId: "",
    userPassword: "",
  });

  const { userId, userPassword } = inputs;

  const onChange = (e) =>{
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPassword,
    };
    if (!userId || !userPassword) {
      alert("필수 항목을 작성하세요!");
    } else {
      dispatch(login(body))
        .then((response) => {
          if (response.payload.loginSuccess) {
            window.localStorage.setItem('userId', response.payload.userId);
            history.push("/board");
          } else {
            alert(response.payload.message);
          }
        })
    }
  };
  return (
    <Fragment>
      <h2 className={styles.title}>Sign in</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <div>Id</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Id"
            name="userId"
            value={userId}
            onChange={onChange}
          />
          <div>Password</div>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter password"
            name="userPassword"
            value={userPassword}
            onChange={onChange}
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

export default withRouter(LoginPage);
