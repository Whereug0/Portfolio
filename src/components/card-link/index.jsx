import React from "react";
import {ReactComponent as LinkIcon} from '../../assets/icons/carbon-link.svg'


import styles from './styles.module.scss'

const CardLink = (props) => {
    const {
        target,
        to,
        label,
        icon
    } = props
    console.log(props);
    return(
        <a target={target} href={to} data-label={label} className={styles["card-link"]}>
            <img src={icon} alt="" className={styles["icon"]}/>
        </a>
    )
}

export default CardLink