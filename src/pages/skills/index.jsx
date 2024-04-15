import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'
import SkillCard from "./skill-card";
import SearchBar from "../../components/search-bar";
import skillsOperations from "./../../redux/skills/thunk"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "../../components/empty-list";

const Skills = () => {
    const skills = useSelector(state => state.skills.list);
    const isLoading = useSelector(state => state.skills.isFetching);
    const theme = useSelector((state) => state.theme);

    const dispatch = useDispatch();
    const { fetchSkills} = skillsOperations;

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        dispatch(fetchSkills())
    },[]);

    const filteredSkills = skills.filter((skill) => {
        if (inputValue === "") {
            return skill;
        }else {
            return skill.label.toLowerCase().includes(inputValue);
        }
    })
    

    if (isLoading) {
        return (
            <div>
                loading...
            </div>
        )
    }


    const handleInputValue = (value) => {
        setInputValue(value.toLowerCase());
        localStorage.setItem("inputSkillsValue", value);
    }

    return(
        <div className={styles['skills-page']}> 
            <SearchBar value={inputValue} onChange={handleInputValue} title="Skills"/>
        <div className={styles["skills-list"]}>
            {filteredSkills.map((skill, idx) => {
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
        {inputValue && filteredSkills.length === 0 && (
        <EmptyList
          icon="false"
          theme={theme}
          text="Could not find anything ..."
        />
        )}          
        </div>
    )
}

export default Skills;