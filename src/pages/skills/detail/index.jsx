import React, { useEffect, useState } from "react";
import styles from './styles.module.scss'
import { useParams } from "react-router-dom";
import { SKILLS_BY_NAME } from "../data";



const DetailSkill = () => {
    const {slug} = useParams()
    const [skillByName, setSkillByName] = useState(null)
    useEffect(() => {
        setSkillByName(SKILLS_BY_NAME(slug))
    },[])

    if(!skillByName) {
        return null
    }
    
    return(
        <div className={styles["detail-page-wrap"]}>
            <div className={styles["title-wrap"]}>
                <h1 className={styles["title"]}>
                    {skillByName.label}
                </h1>
                <div className={styles["image-wrap"]}>
                    <img src={skillByName.image} alt={skillByName.name} />
                </div>
            </div>
            <p className={styles['description']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quos hic, sapiente accusantium rerum perspiciatis nesciunt quam odio harum enim, corrupti incidunt molestias possimus deserunt doloremque natus earum esse officiis.
            </p>
        </div>
    )
}


export default DetailSkill