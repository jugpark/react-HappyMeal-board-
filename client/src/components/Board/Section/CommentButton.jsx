import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../css/CommentButton.module.css";
import comment from "../../../assets/comment.png";

function CommentButton({ boardId }) {
  const userFrom = localStorage.getItem("userId");
  const [CommentCounts, setCommentCounts] = useState(0);
  let variables = {
    userFrom: userFrom,
    boardFrom: boardId,
  };
  useEffect(() => {
    axios.post("/api/users/comment/getComment", variables).then((response) => {
      if (response.data.success) {
        setCommentCounts(response.data.commentCounts);
      } else {
        alert("댓글을 보여줄 수 없습니다.");
      }
    });
  }, []);
  return (
    <button className={styles.Button}>
      <img className={styles.ButtonImage} src={comment} alt="comment" />
      <p className={styles.CommentCounted}>{CommentCounts}</p>
    </button>
  );
}

export default CommentButton;
