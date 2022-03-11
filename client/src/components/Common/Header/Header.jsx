import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../../actions/userAction";

const Header = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logout()).then((response) => {
      if (response.payload.logoutSuccess) {
        window.localStorage.removeItem("userId");
        window.localStorage.removeItem("userNickname");
        props.history.push("/");
      } else {
        alert("로그아웃에 실패했습니다");
      }
    });
  };

  return (
    <header>
      <nav>
        <div className={styles.header}>
          <NavLink
            to="/"
            className={
              location.pathname === "/" ? styles.logo : styles.logo_dark
            }
          >
            <FontAwesomeIcon
              icon={faPizzaSlice}
              className={
                location.pathname === "/"
                  ? styles.icon_footprint
                  : styles.icon_footprint_dark
              }
            />
            HappyMeal
          </NavLink>
          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/board"
                className={
                  location.pathname === "/"
                    ? styles.content
                    : styles.content_dark
                }
              >
                자유게시판
              </NavLink>
            </li>
            {user.userData && user.userData.isAuth ? (
              <li>
                  <NavLink
                    to="/profile"
                    className={
                      location.pathname === "/"
                        ? styles.content_profile
                        : styles.content_profile_dark
                    }
                  >
                    프로필  
                  </NavLink>
                  <NavLink
                    to="/"
                    onClick={logoutHandler}
                    className={
                      location.pathname === "/"
                        ? styles.content
                        : styles.content_dark
                    }
                  >
                    로그아웃
                  </NavLink>
              </li>
            ) : (
              <li>
                  <NavLink
                    to="/login"
                    className={
                      location.pathname === "/"
                        ? styles.content
                        : styles.content_dark
                    }
                  >
                    로그인
                  </NavLink>
              
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
