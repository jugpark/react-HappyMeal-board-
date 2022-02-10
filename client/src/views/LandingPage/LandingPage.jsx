import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.img}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>New Collection</h1>
          <h3>Explore our newest collection and find your best one</h3>
          <NavLink className={styles.view} to="/products">
            VIEW
          </NavLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.img2}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>New Collection</h1>
          <h3>Explore our newest collection and find your best one</h3>
          <NavLink className={styles.view} to="/products">
            VIEW
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
