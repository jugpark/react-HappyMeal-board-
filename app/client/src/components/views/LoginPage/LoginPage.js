import React, { Fragment, useState } from "react";

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
      <h2>Sign in</h2>
      <form onSubmit={submitHandler}>
        <div className="form__content">
          <input
            type="id"
            placeholder="Enter id"
            value={id}
            onChange={idChangeHandler}
          />
          <div></div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <button className="btn">Sign In</button>
      </form>
    </Fragment>
  );
};

export default LoginPage;
