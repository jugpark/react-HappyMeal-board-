import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styles from "./PageList.module.css";
import axios from "axios";

function PageList({ history }) {
  const [inputs, setInput] = useState({
    currentEmail: "",
    currentNickname: "",
    currentPassword: "",
    checkPassword: "",
    newPassword: "",
  });
  const {
    currentEmail,
    currentNickname,
    currentPassword,
    checkPassword,
    newPassword,
  } = inputs;
  const userFrom = localStorage.getItem("userId");

  useEffect(() => {
    axios.get("/api/users/user", { _id: userFrom }).then((response) => {
      setInput({
        currentNickname: response.data.nickname,
        currentEmail: response.data.email,
        currentPassword: "",
      });
    });
  }, [userFrom]);

  const onChangeHandler = (e) => {
    const { value, name } = e.currentTarget;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const NicknameSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      _id: userFrom,
      nickname: currentNickname,
    };
    axios.post("/api/users/user/update/nickname", body).then((response) => {
      if (response.status === 200) {
        alert("닉네임이 변경되었습니다.");
        history.push("/profile");
      } else {
        alert("닉네임 변경에 실패했습니다.");
      }
    });
  };

  //
  const EmailSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      _id: userFrom,
      password: currentPassword,
      email: currentEmail,
    };
    axios.post("/api/users/user/update/email", body).then((response) => {
      if (!response.data.changeSuccess) {
        alert(response.data.message);
      } else {
        if (response.data.changeSuccess) {
          history.push("/profile");
          alert("이메일이 변경되었습니다.");
        } else {
          alert("이메일 변경에 실패했습니다.");
        }
      }
    });
  };
  ///
  const PasswordSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      _id: userFrom,
      oldPassword: currentPassword,
      newPassword: newPassword,
    };
    if (newPassword !== checkPassword) {
      alert("새 비밀번호를 확인해주세요.");
    } else {
      axios.post("/api/users/user/update/password", body).then((response) => {
        if (!response.data.changeSuccess) {
          alert(response.data.message);
        } else {
          if (response.data.changeSuccess) {
            history.push("/profile");
            alert("비밀번호가 변경되었습니다.");
          } else {
            alert("비밀번호 변경에 실패했습니다.");
          }
        }
      });
    }
  };
  return (
    <>
      <ul className={styles.ul}>
        <form onSubmit={NicknameSubmitHandler}>
          <h2 className={styles.Title}>닉네임</h2>
          <input className={styles.Input}
            name="currentNickname"
            placeholder="닉네임"
            value={currentNickname}
            onChange={onChangeHandler}
          />
          <button className={styles.Button} margin="10px 0px 20px 0px">닉네임 변경</button>
        </form>
        <form onSubmit={EmailSubmitHandler}>
          <h2 className={styles.Title}>이메일</h2>
          <input className={styles.Input}
            name="currentEmail"
            placeholder="이메일"
            value={currentEmail}
            onChange={onChangeHandler}
          />
          <h2 className={styles.Title}>계정 비밀번호 확인</h2>
          <input className={styles.Input}
            type="password"
            name="currentPassword"
            placeholder="계정 비밀번호"
            value={currentPassword}
            onChange={onChangeHandler}
          />
          <button className={styles.Button} margin="20px 0px 20px 0px">이메일 변경</button>
        </form>
        <form>
          <div className={styles.Titlebox}>
            <h2 className={styles.Title}>새 비밀번호</h2>
            <p className={styles.Subtitle}>4~20자</p>
          </div>
          <input className={styles.Input}
            type="password"
            name="newPassword"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={onChangeHandler}
          />
          <input className={styles.Input}
            type="password"
            name="checkPassword"
            placeholder="새 비밀번호 확인"
            value={checkPassword}
            onChange={onChangeHandler}
          />
          <h2 className={styles.Title}>계정 비밀번호 </h2>
          <input className={styles.Input}
            type="password"
            name="currentPassword"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={onChangeHandler}
          />
          <button className={styles.Button}>비밀번호 변경</button>
        </form>
      </ul>
    </>
  );
}

export default withRouter(PageList);
