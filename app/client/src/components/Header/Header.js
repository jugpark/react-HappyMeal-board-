import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { faSearch, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.header}>
          <NavLink className={styles.logo} to="/">
              <FontAwesomeIcon icon={faShoePrints} className={styles.icon_wine}/>
            GG
          </NavLink>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/search">
                <FontAwesomeIcon icon={faSearch} className={styles.icon_search}/>
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={styles.product}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={styles.signin}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={styles.register}>
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
