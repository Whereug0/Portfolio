import React from "react";
import styles from './styles.module.scss'
import { Link } from "react-router-dom";
import clsx from "clsx";
const ParentEl = ({to, label, children}) => {
    return to ? (
        <Link data-label = {label} to={to} className={styles["chip-icon"]}>
            {children}
        </Link>
    ) : (
        <span data-label = {label} className={clsx(styles["chip-icon"], styles["cursor-help"])}>
            {children}
        </span>
    )
}
 
const ChipIcon = (props) => {
    const {
        to,
        icon,
        label
    } = props
    return(
        <ParentEl label = {label} to={to}>
            <div className={styles["img-wrap"]}>
                <img src={icon} alt="icon" />
            </div>
        </ParentEl>
    )
}


export default ChipIcon