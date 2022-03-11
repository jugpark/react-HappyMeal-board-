import React, { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import axios from "axios";
import styles from "./css/BoardView.module.css";
import AddBoard from "./Section/AddBoard";
import UserProfile from "./Section/UserProfile";
import Pagination from "@material-ui/lab/Pagination";

function BoardView({ history, match }) {
  const userFrom = localStorage.getItem("userId");
  const writerFrom = localStorage.getItem("userNickname");
  const [totalPage, settotalPage] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [BoardWriter, setBoardWriter] = useState(writerFrom);
  const [Content, setContent] = useState([]);
  const [inputs, setInput] = useState({
    boardTitle: "",
    boardContent: "",
  });
  const { boardTitle, boardContent } = inputs;

  useEffect(() => {
    FetchBoard();
    console.log("fetch");
  }, [currentPage]);

  const FetchBoard = () => {
    axios
      .post("/api/users/board/getBoard", { page: currentPage })
      .then((response) => {
        if (response.data.success) {
          setContent(response.data.boards);
          settotalPage(Math.ceil(response.data.count / 5));
        } else {
          alert("게시글을 보여줄 수 없습니다.");
        }
      });
  };

  const onRemove = (id) => {
    setContent(Content.filter((Content) => Content._id !== id));
    FetchBoard();
  };

  const handlePageChange = (e) => {
    const currentPage = parseInt(e.target.textContent);
    setcurrentPage(currentPage);
  };
  return (
    <>
      <ul className={styles.MenuBox}>
        <div className={styles.Profilebox}>
          <UserProfile boardPage={true} />
          <NavLink to="/profile">
            <div className={styles.Profilebtn}>내정보</div>
          </NavLink>
        </div>
        {Content &&
          Content.map((board, index) => {
            return (
              <React.Fragment key={index}>
                <AddBoard
                  className={styles.AddBoard}
                  id={board._id}
                  time={board.createdAt}
                  writer={board.boardWriter}
                  title={board.boardTitle}
                  content={board.boardContent}
                  history={`${history}`}
                  onRemove={onRemove}
                />
              </React.Fragment>
            );
          })}
        <div className={styles.PaginationBox}>
          <Pagination
            count={totalPage}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            size="small"
            hidePrevButton
            hideNextButton
          />
          <NavLink to="/boardwrite" className={styles.SubmitButton}>
            <div className={styles.ButtonTittle}> 글 작성</div>
          </NavLink>
        </div>
      </ul>
    </>
  );
}

export default withRouter(BoardView);
