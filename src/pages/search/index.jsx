import React from "react";
import styles from './styles.module.scss'
import SearchBar from "../../components/search-bar";

function Search() {
    return (
        <div className={styles.container}>
            <SearchBar title="Search"/>
        </div>
    )
}

export default Search