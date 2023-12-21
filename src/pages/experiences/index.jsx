import React from "react";
import styles from './styles.module.scss'
import SearchBar from "../../components/search-bar";
import ExperiencesCard from "./experiences-card";
import noImg from '../../assets/images/no-img.svg'

function Experiences() {
    return (
        <div className={styles.container}>
            <SearchBar title="Experiences"/>
            <div className={styles["experiences-cards-wrap"]}>
                <div className={styles["card__item1"]}>
                    <ExperiencesCard image = {noImg} title ="Open Source Developer" date="December 2023 - Presend 1 day" description="Creating awesome tools for developers."/>
                </div>
                <div className={styles["card__item2"]}>
                    <ExperiencesCard image = {noImg} title ="Open Source Developer" date="December 2023 - Presend 1 day" description="Creating awesome tools for developers."/>
                </div>
                <div className={styles["card__item3"]}>
                    <ExperiencesCard image = {noImg} title ="Open Source Developer" date="December 2023 - Presend 1 day" description="Creating awesome tools for developers."/>
                </div>
                
            </div>
            
        </div>
    )
}

export default Experiences