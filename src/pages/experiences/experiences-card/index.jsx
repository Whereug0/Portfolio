import React from "react";
import styles from './styles.module.scss'
import BoxLayout from "../../../components/box-layout";
import CardLink from "../../../components/card-link";
import companyIcon from '../../../assets/icons/company-icon.svg'
import locationIcon from '../../../assets/icons/location-icon.svg'
import contractIcon from '../../../assets/icons/contract-icon.svg'

const ExperiencesCard = (props) => {
    const {
        title,
        image,
        date,
        description
    }=props
    return(
            <BoxLayout>
                <div className={styles["card-wrap"]}>
                    <img src={image} alt="noimg" className={styles["image"]}/>
                    <div>
                        <h3>{title}</h3>
                       <div className={styles["icons-wrap"]}>
                            <CardLink icon = {companyIcon} label ="Company: Self-employed"/>
                            <CardLink icon = {locationIcon} label ="Location: Home"/>
                            <CardLink icon = {contractIcon} label ="Contract: Self-employed"/>
                       </div>
                        
                        <p className={styles["date"]}>{date}</p>
                        <p className={styles["description"]}>{description}</p>
                    </div>
                </div>
            </BoxLayout>
    )
}

export default ExperiencesCard