import React from "react";
import axios from "axios";
import styles from "../css/DeleteComment.module.css";
import { withRouter } from "react-router-dom";

function DeleteComment(props) {
  const onDelete = () => {
    let variables = {
      id: props.id,
      userFrom: props.user,
    };
    console.log(props.id);
    let confirmDelete = window.confirm("삭제하시겠습니까?");
    confirmDelete &&
      axios
        .post("/api/users/comment/deleteComment", variables)
        .then((response) => {
          if (response.data.success) {
            alert("댓글 삭제에 성공했습니다.");
            props.onRemove(response.data.result._id);
          } else {
            alert("댓글 삭제에 실패했습니다.");
          }
        });
  };
  return (
    <button className={styles.Button} onClick={onDelete}>
      삭제
    </button>
  );
}

export default withRouter(DeleteComment);
