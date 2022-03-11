import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import styles from "./css/BoardDetail.module.css";
import AddBoard from "./Section/AddBoard";
import AddComment from "./Section/AddComment";
import writeIcon from "../../assets/write.png";

function BoardDetail(props) {
  const BoardId = props.match.params.id;
  const userFrom = localStorage.getItem("userId");
  const writerFrom = localStorage.getItem("userNickname");
  const [Comments, setComments] = useState([]);
  const [BoardDetail, setBoardDetail] = useState([]);
  const [BoardWriter, setBoardWriter] = useState(writerFrom);
  const [Value, setValue] = useState("");
  let variables = {
    userFrom: userFrom,
    boardFrom: BoardId,
    commentContent: Value,
    commentWriter: BoardWriter,
  };

  useEffect(() => {
    const variable = { boardId: BoardId };
    axios.post(`/api/users${props.match.path}`, variable).then((response) => {
      if (response.data.success) {
        setBoardDetail([response.data.board]);
      } else {
        alert("게시글 가져오기에 실패했습니다.");
      }
    });
    FetchComment();
  }, []);

  const FetchComment = () => {
    axios.post("/api/users/comment/getComment", variables).then((response) => {
      if (response.data.success) {
        setComments(response.data.comments);
      } else {
        alert("댓글을 보여줄 수 없습니다.");
      }
    });
  };

  const onRemoveBoard = (id) => {
    setBoardDetail(BoardDetail.filter((BoardDetail) => BoardDetail._id !== id));
    props.history.push("/");
  };
  const onRemoveComment = (id) => {
    setComments(Comments.filter((Comments) => Comments._id !== id));
  };
  const onChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/users/comment/upload", variables).then((response) => {
      alert("댓글이 등록되었습니다.");
      setValue("");
      FetchComment();
    });
  };

  return (
    <div>
      {BoardDetail &&
        BoardDetail.map((board, index) => {
          return (
            <React.Fragment key={index}>
              <AddBoard
                id={board._id}
                user={board.userFrom}
                time={board.createdAt}
                writer={board.boardWriter}
                title={board.boardTitle}
                content={board.boardContent}
                history={`${props.history}`}
                onRemove={onRemoveBoard}
              />
            </React.Fragment>
          );
        })}
      <form className={styles.CommentForm} onSubmit={onSubmit}>
        <input
          className={styles.Input}
          name="Comment"
          placeholder="댓글을 작성해주세요."
          value={Value}
          onChange={onChange}
        />
        <button className={styles.SubmitButton} onSubmit={onSubmit}>
          <img className={styles.InputIcon} src={writeIcon} />
        </button>
      </form>
      {Comments &&
        Comments.map((comment, index) => {
          return (
            <React.Fragment key={index}>
              <AddComment
                id={comment._id}
                user={comment.userFrom}
                time={comment.createdAt}
                writer={comment.commentWriter}
                content={comment.commentContent}
                onRemove={onRemoveComment}
              />
            </React.Fragment>
          );
        })}
      <NavLink className={styles.Box} to="/board">
        <div className={styles.ButtonTittle}>글목록</div>
      </NavLink>
    </div>
  );
}

export default withRouter(BoardDetail);
