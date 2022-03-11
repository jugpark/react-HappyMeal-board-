import React from "react";
import styles from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
