import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../input";
import { useSelector } from "react-redux";

const SearchBar = (props) => {
  const { title, value, onChange } = props;
  const theme = useSelector((state) => state.theme);
  

  return (
    <div className={styles["search-bar"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <Input
        theme={theme}
        value={value} 
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
