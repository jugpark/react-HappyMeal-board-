import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>
        Copyright @ Jugwang | All rights reserverd | GG 
      </span>
      <div className={styles.icons}>
        <a className={styles.icon}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className={styles.icon}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className={styles.icon}
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className={styles.icon}
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPinterest} />
        </a>
        <a className={styles.icon}
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
