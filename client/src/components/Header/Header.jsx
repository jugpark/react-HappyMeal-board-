import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { faSearch, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav>
        <div className={styles.header}>
          <NavLink className={location.pathname === "/" ? styles.logo : styles.logo_dark} to="/">
              <FontAwesomeIcon icon={faShoePrints} className={location.pathname === "/" ? styles.icon_wine : styles.icon_wine_dark}/>
            GG
          </NavLink>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/search">
                <FontAwesomeIcon icon={faSearch} className={location.pathname === "/" ? styles.icon_search : styles.icon_search_dark}/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={location.pathname === "/" ? styles.content : styles.content_dark}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={location.pathname === "/" ? styles.content : styles.content_dark}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={location.pathname === "/" ? styles.content : styles.content_dark}>
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
