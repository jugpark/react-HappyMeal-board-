import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "../css/AddBoard.module.css";
import LikeButton from "./LikeButton";
import CommentButton from "./CommentButton";
import UpdateTime from "../../Common/UpdateTime";
import profile from "../../../assets/profile.png";
import DeleteBoard from "./DeleteBoard";

function AddBoard(props) {
  const currentUser = window.localStorage.getItem("userId");
  return (
    <>
      <div className={styles.BoardBox} key={props.id}>
        <div className={styles.BoardUser}>
          <span style={{ display: "flex" }}>
            <img className={styles.BoardUserImg} src={profile} alt="profile" />
            <p className={styles.BoardUserID}>{props.writer}</p>
            <div className={styles.BoardTime}>
              <UpdateTime time={props.time} />
            </div>
          </span>
          {props.user === currentUser ? (
            <DeleteBoard
              board={props.id}
              user={props.user}
              history={props.history}
              onRemove={props.onRemove}
            />
          ) : null}
        </div>
        <NavLink className={styles.Content} to={`/board/${props.id}`}>
          <div className={styles.BoardTitle}>{props.title}</div>
          <div className={styles.BoardContent}>{props.content}</div>
        </NavLink>
        <div style={{ textAlign: "right" }}>
          <LikeButton
            boardId={props.id}
            boardWriter={props.writer}
            boardTitle={props.title}
            boardContent={props.content}
          />
          <NavLink to={`/board/${props.id}`}>
            <CommentButton boardId={props.id} />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default withRouter(AddBoard);
