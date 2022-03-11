import React, { useState, useEffect } from "react";
import styles from "../css/UserProfile.module.css";
import profile from "../../../assets/profile.png";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const UserProfile = function (props) {
  const [User, setUser] = useState({
    userId: "",
    userNickname: "",
  });
  const { userId, userNickname } = User;

  useEffect(() => {
    const userFrom = localStorage.getItem("userId");
    axios.get("/api/users/user/profile", { _id: userFrom }).then((response) => {
      setUser({
        userId: response.data.id,
        userNickname: response.data.nickname,
      });
      console.log(userFrom);
      window.localStorage.setItem("userNickname", response.data.nickname);
    });
  }, []);

  if (props.boardPage) {
    return (
      <div className={styles.Profile}>
        <Link to="/Profile">
          <img
            className={styles.ProfileImage}
            src={profile}
            alt="profile"
          ></img>
        </Link>
        <div className={styles.Nickname}>{userNickname}</div>
        <div className={styles.ProfileID}>{userId}</div>
      </div>
    );
  }
};

export default withRouter(UserProfile);
