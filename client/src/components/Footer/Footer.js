import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <span className={styles.copy}>
          Copyright Jugwang @ 2022. All reserved
        </span>
    </footer>
  );
};

export default Footer;
