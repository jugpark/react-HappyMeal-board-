import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { faSearch, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "../../actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
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
              icon={faShoePrints}
              className={
                location.pathname === "/"
                  ? styles.icon_wine
                  : styles.icon_wine_dark
              }
            />
            GG
          </NavLink>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/search">
                <FontAwesomeIcon
                  icon={faSearch}
                  className={
                    location.pathname === "/"
                      ? styles.icon_search
                      : styles.icon_search_dark
                  }
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={
                  location.pathname === "/"
                    ? styles.content
                    : styles.content_dark
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={
                  location.pathname === "/"
                    ? styles.content
                    : styles.content_dark
                }
              >
                Cart
              </NavLink>
            </li>
            {user.userData && user.userData.isAuth ? (
              <li>
                <div>
                  <NavLink
                    to="/profile"
                    className={
                      location.pathname === "/"
                        ? styles.content
                        : styles.content_dark
                    }
                  >
                    Profile
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/login" onClick={logoutHandler}>
                    Logout
                  </NavLink>
                </div>
              </li>
            ) : (
              <li>
                <div>
                  <NavLink
                    to="/register"
                    className={
                      location.pathname === "/"
                        ? styles.content
                        : styles.content_dark
                    }
                  >
                    Register
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/login"
                    className={
                      location.pathname === "/"
                        ? styles.content
                        : styles.content_dark
                    }
                  >
                    Sign in
                  </NavLink>
                </div>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
