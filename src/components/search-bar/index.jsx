import React from "react";
import styles from './styles.module.scss'
import Input from "../input";

const SearchBar = (props) => {
    const{
        title
    } = props
    return(
        <div className={styles["search-bar"]}>
            <h2 className={styles["title"]}>{title}</h2>
            <Input />
        </div>
    )
}

export default SearchBar