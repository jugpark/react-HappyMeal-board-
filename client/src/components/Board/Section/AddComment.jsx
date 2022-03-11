import React from "react";
import styles from "../css/AddComment.module.css";
import profile from "../../../assets/profile.png";
import { withRouter } from "react-router-dom";
import UpdateTime from "../../Common/UpdateTime";
import DeleteComment from "./DeleteComment";

function AddComment(props) {
  const currentUser = window.localStorage.getItem("userId");
  return (
    <>
      <div className={styles.CommentBox} key={props.id}>
        <div className={styles.CommentUser}>
          <span style={{ display: "flex" }}>
            <img
              className={styles.CommentUserImg}
              src={profile}
              alt="profile"
            />
            <p className={styles.CommentUserID}>{props.writer}</p>
          </span>
          {props.user === currentUser ? (
            <DeleteComment
              id={props.id}
              user={props.user}
              onRemove={props.onRemove}
            />
          ) : null}
        </div>
        <div className={styles.CommentContent}>{props.content}</div>
        <p className={styles.CommentTime}>
          <UpdateTime time={props.time} />
        </p>
      </div>
    </>
  );
}

export default withRouter(AddComment);
