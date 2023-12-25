import React from "react";
import styles from './styles.module.scss'
import SearchBar from "../../components/search-bar";
import Chip from "../../components/chip";
import ProjectCard from "./project-card";
import PROPJECT_DATA from "./detail/data";

function Projects() {
    return (
        <div className={styles["project-wrap-page"]}>
            <SearchBar title="Projects"/>
            <div className={styles["chips-wrap"]}>
                <Chip label = "TypeScript"/>
                <Chip label = "Sass"/>
                <Chip label = "React"/>
            </div>
            <div className={styles["cards"]}>
                {PROPJECT_DATA.map(item => {
                    return (
                        <ProjectCard project={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects