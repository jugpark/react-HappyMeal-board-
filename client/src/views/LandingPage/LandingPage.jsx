import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const LandingPage = () => {
  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    event.preventDefault(); 
  };

  return (
    <div>
      <section className={styles.section}>
        <div className={styles.img}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>편하게 검색하고</h1>
          <h3>다른사람들과 공유도 하고, 발매정보도 얻고</h3>
          <NavLink className={styles.view} to="/products">
            발매정보
          </NavLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.img2}></div>
        <form onSubmit={submitHandler}>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
