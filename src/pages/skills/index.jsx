import React from "react";
import styles from './styles.module.scss'
import SkillCard from "./skill-card";
import SearchBar from "../../components/search-bar";

import { SKILLS_DATA } from "./data";
import { Link } from "react-router-dom";


const Skills = () => {
    return(
        <div className={styles['skills-page']}> 
            <SearchBar title="Skills"/>
        <div className={styles["skills-list"]}>
            {SKILLS_DATA.map((skill, idx) => {
                return(
                    <Link to={`/skills/${skill.name}`} key={skill.id} className={styles["link"]}>
                        <SkillCard
                            title={skill.label}
                            image={skill.image} 
                        />
                    </Link>
                )
            })}


        </div>            
        </div>
    )
}

export default Skills