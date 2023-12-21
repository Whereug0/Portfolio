import React from "react";
import styles from './styles.module.scss'
import BoxLayout from "../../../components/box-layout";
const SkillCard = (props) => {
    const {
        image,
        title
    } = props

    return (
        <BoxLayout className={styles['skill-card']}>
            <h3 className={styles["title"]}>{title}</h3>
            <div className={styles["image-wrap"]}>
                <img src={image} alt="Skill logo" />
            </div>
        </BoxLayout>
    )
}

export default SkillCard