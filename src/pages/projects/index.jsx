import React from "react";
import styles from './styles.module.scss'
import SearchBar from "../../components/search-bar";
import Chip from "../../components/chip";
import ProjectCard from "./project-card";
import noImg from "../../assets/images/no-img.svg";
import svelteImg from '../../assets/images/svelte.png'
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
                <ProjectCard image={noImg} description ="lorem ipsum" date = "1 day"/>       
                <ProjectCard image={svelteImg} description ="lorem ipsum" date = "1 day"/>     
            </div>
        </div>
    )
}

export default Projects