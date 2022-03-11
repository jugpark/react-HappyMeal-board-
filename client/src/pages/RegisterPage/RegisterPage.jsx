import React, { useState, Fragment } from "react";
import styles from "./RegisterPage.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../actions/userAction";
import { withRouter } from 'react-router-dom';


const RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    userId: "",
    userPassword: "",
    userEmail: "",
    userNickname: "",
    usableId: false,
  });

  const { userId, userPassword, userEmail, userNickname, usableId } = inputs;
  const [overIdLength, setOverIdLength] = useState(false);
  const [overPasswordLength, setOverPasswordLength] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
      usableId: usableId,
    });

    if (inputs.userId.length> 8) {
      setOverIdLength(true);
    } else {
      setOverIdLength(false);
    }

    if (inputs.userPassword.length > 12) {
      setOverPasswordLength(true);
    } else {
      setOverPasswordLength(false);
    }
  };

  const checkId = (e) => {
    e.preventDefault();
    if (overIdLength) {
      return;
    }
    axios
      .post(`/api/users/register/checkId/${userId}`, { id: userId })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setInput({
            ...inputs,
            usableId: true,
          });
          alert("사용가능한 아이디입니다.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("다른 아이디를 입력해주세요");
      });
  };

  const SignUp = (e) => {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPassword,
      email: userEmail,
      nickname: userNickname,
    };
    if (overIdLength || overPasswordLength) {
      return;
    } else if (!userId || !userPassword || !userEmail || !userNickname) {
      alert("필수 항목을 작성해주세요");
      return;
    } else if (usableId === false) {
      alert("아이디 중복확인을 해주세요");
      return;
    } else {
      dispatch(register(body))
        .then((response) => {
          if (response.payload.success) {
            alert("회원가입을 완료했습니다.");
            history.push("/login");
          } else {
            alert("회원가입에 실패했습니다.");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Fragment>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.form}>
        <form onSubmit={checkId}>
          <div>Id</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Id"
            onChange={onChange}
            name="userId"
            value={userId}
          />
          <button onClick={checkId}>중복체크</button>
        </form>
        <form onSubmit={SignUp}>
          <div>Password</div>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter password"
            onChange={onChange}
            name="userPassword"
            value={userPassword}
          />
          {overPasswordLength && (
            <p className={styles.styledP}>
              비밀번호를 12자 이내로 입력해주세요
            </p>
          )}
          <div>Nickname</div>
          <input
            className={styles.input}
            type="name"
            placeholder="Enter Nickname"
            onChange={onChange}
            name="userNickname"
            value={userNickname}
          />
          <div>Email</div>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            name="userEmail"
            value={userEmail}
          />
          <div>
          <button type="submit" className={styles.view}>
            Register
          </button>
          <NavLink to="/login" className={styles.link}>
            Already Registered?
          </NavLink>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default withRouter (RegisterPage);
