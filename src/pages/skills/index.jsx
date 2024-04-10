import React, { useEffect } from "react";
import styles from './styles.module.scss'
import SkillCard from "./skill-card";
import SearchBar from "../../components/search-bar";
import skillsOperations from "./../../redux/skills/thunk"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Skills = () => {
    const skills = useSelector(state => state.skills.list);
    const theme = useSelector((state) => state.theme);
    const isLoading = useSelector(state => state.skills.isFetching);
    const dispatch = useDispatch()



  
    

    const { fetchSkills} = skillsOperations

    useEffect(() => {
        dispatch(fetchSkills())
    },[])

    if (isLoading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return(
        <div className={styles['skills-page']}> 
            <SearchBar title="Skills"/>
        <div className={styles["skills-list"]}>
            {skills.map((skill, idx) => {
                return(
                    <Link to={`/skills/${skill.slug}`} key={skill.id} className={styles["link"]}>
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