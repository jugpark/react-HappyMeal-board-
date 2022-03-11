import React, { useState } from "react";
import axios from "axios";
import styles from "./BoardWritePage.module.css";
import { NavLink, withRouter } from "react-router-dom";
import UserProfile from "../../components/Board/Section/UserProfile";

function BoardWritePage({ history, match }) {
  const userFrom = localStorage.getItem("userId");
  const writerFrom = localStorage.getItem("userNickname");
  const [BoardWriter, setBoardWriter] = useState(writerFrom);
  const [inputs, setInput] = useState({
    boardTitle: "",
    boardContent: "",
  });
  const { boardTitle, boardContent } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!boardTitle) {
      alert(`제목을 작성해주세요`);
      return;
    } else if (!boardContent) {
      alert(`내용을 작성해주세요`);
      return;
    } else if (boardContent.length > 300) {
      alert(`내용을 300자 이내로 작성해주세요`);
      return;
    }
    let variables = {
      userFrom: userFrom,
      boardTitle: boardTitle,
      boardContent: boardContent,
      boardWriter: BoardWriter,
    };
    axios.post("/api/users/board/upload", variables).then((response) => {
      if (response.status === 200) {
        setInput({
          boardTitle: "",
          boardContent: "",
        });
        history.push("/board");
      } else {
        alert("게시글 업로드에 실패하였습니다.");
      }
    });
  };
  return (
    <>
      <ul className={styles.MenuBox}>
        <div className={styles.Profilebox}>
          <UserProfile boardPage={true} />
          <NavLink to="/Profile">
            <div className={styles.Profilebtn}>내정보</div>
          </NavLink>
        </div>
        <form className={styles.BoardForm} onSubmit={onSubmit}>
          <input
            className={styles.Input}
            name="boardTitle"
            placeholder="제목을 작성해주세요."
            value={boardTitle}
            onChange={onChange}
          />
          <textarea
            className={styles.Textarea}
            name="boardContent"
            placeholder="여기를 눌러서 글을 작성할 수 있습니다."
            value={boardContent}
            onChange={onChange}
          ></textarea>
          <button to="/board"className={styles.SubmitButton} onSubmit={onSubmit}>
            <div className={styles.ButtonTittle}>작성</div>
          </button>
        </form>
      </ul>

    </>
  );
}

export default withRouter(BoardWritePage);
