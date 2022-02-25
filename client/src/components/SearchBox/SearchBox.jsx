import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search" onChange={changeHandler} />
        </div>
      </form>
    </div>
  );
};
export default SearchBox;
