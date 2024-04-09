import React, { useState } from "react";
import styles from "./styles.module.scss";
import Input from "../input";

const SearchBar = (props) => {
  const { title } = props;
  
  const [value, setValue] = useState('')
  return (
    <div className={styles["search-bar"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <Input value={value} onChange={setValue}/>
    </div>
  );
};

export default SearchBar;
