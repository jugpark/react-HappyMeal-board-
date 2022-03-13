 ✨ 목표  
* 기본적인 게시판 구축  
 로그인 기능 구현 :
* 처음 접속 시 메인화면을 로그인으로 설정
* 토큰을 이용하여 유저가 비로그인 시 마이페이지, 게시판 페이지 안보이게 설정
* 로그인 시 userId, userPw가 일치하는지 체크
* input에 userId, userPw 정보가 다 들어왔는지 확인
 > 회원가입
* 아이디 및 비밀번호 글자 수 제한
* 아이디 중복 체크
* input에 정보가 다 들어왔는지 확인하고 회원가입 승인
> 게시판
* user profile에 설정한 닉네임 아이디 표시
* 게시판 글 작성 기능
* 게시판 글 작성시간 추가
* 등록된 게시글 좋아요 및 댓글 기능 추가
* 게시판 페이지네이션 기능 추가
> 마이페이지
* 계정 정보 변경 기능 및 메뉴 추가(nickname, email, password)

🧰 사용기술

HTML, CSS(PostCSS), Reactjs, Nodejs(Expressjs)

📌LandingPage
* section을 두개로 나누어 소개용 섹션과 홍보용 섹션으로 나누었습니다.

``` Javascript 
import React from "react";
import styles from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.img}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>나의 먹킷리스트</h1>
          <h3>다른사람들과 공유도 하고, 다른 정보도 채워넣고</h3>
          <NavLink className={styles.view} to="/board">
            자유게시판
          </NavLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.img2}></div>
        <div className={styles.content2}>
          <h1 className={styles.title}>나만의 먹킷리스트</h1>
          <h3>다른사람들과 더 많이 공유하고!</h3>
          <div className={styles.icons}>
            <a
              className={styles.icon}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className={styles.icon}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className={styles.icon}
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className={styles.icon}
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a
              className={styles.icon}
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(LandingPage);
```
<img width="1422" alt="homescreen" src="https://user-images.githubusercontent.com/90168987/158062966-ead71794-b4da-490c-b276-00be04ed6418.png">


📌LoginPage
* onSubmit 함수를 구현함에 있어, userId 를 localstroage 에 저장하여 향 후, 키값으로 사용하도록 했습니다.
```Javascript
import React, { Fragment, useState } from "react";
import styles from "./LoginPage.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userAction";
import { withRouter } from 'react-router-dom';


const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const [inputs, setInput] = useState({
    userId: "",
    userPassword: "",
  });

  const { userId, userPassword } = inputs;

  const onChange = (e) =>{
    const { value, name } = e.target;
    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let body = {
      id: userId,
      password: userPassword,
    };
    if (!userId || !userPassword) {
      alert("필수 항목을 작성하세요!");
    } else {
      dispatch(login(body))
        .then((response) => {
          if (response.payload.loginSuccess) {
            window.localStorage.setItem('userId', response.payload.userId);
            history.push("/board");
          } else {
            alert(response.payload.message);
          }
        })
    }
  };
  return (
    <Fragment>
      <h2 className={styles.title}>Sign in</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <div>
          <div>Id</div>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Id"
            name="userId"
            value={userId}
            onChange={onChange}
          />
          <div>Password</div>
          <input
            className={styles.input}
            type="password"
            placeholder="Enter password"
            name="userPassword"
            value={userPassword}
            onChange={onChange}
          />
        </div>
        <button type="submit" className={styles.view}>
          Sign In
        </button>
        <NavLink to="/register" className={styles.link}>
          Not Registered?
        </NavLink>
      </form>
    </Fragment>
  );
};

export default withRouter(LoginPage);
```
<img width="1438" alt="login" src="https://user-images.githubusercontent.com/90168987/158062965-4f92cb0c-8820-4308-b028-fa3bb443de17.png">

📌RegisterPage

```Javascript
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
```
📌ProfilePage
```Javascript
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
```
<img width="1440" alt="profile" src="https://user-images.githubusercontent.com/90168987/158063052-174b2905-d8b8-453e-ba0d-a59625ed4d27.png">


📌BoardPage
```Javascript
import React from "react";
import { Route, withRouter } from "react-router-dom";
import BoardDetail from "../../components/Board/BoardDetail";
import BoardView from "../../components/Board/BoardView";

function Board({ match }) {
  return (
    <>
      <Route exact path={match.path} component={BoardView} />
      <Route path={`${match.path}/:id`} component={BoardDetail} />
    </>
  );
}

export default withRouter(Board); 
```
<img width="1431" alt="board" src="https://user-images.githubusercontent.com/90168987/158062970-aae86e7e-4e07-4414-b3bc-281585f5992d.png">


📌BoardWritePage

```Javascript
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
```
<img width="1439" alt="boardwrite" src="https://user-images.githubusercontent.com/90168987/158063055-7a1e60a2-4327-41d4-bdc6-f1e6d1ad759e.png">
