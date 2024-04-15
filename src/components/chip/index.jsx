import React from "react";
import styles from './styles.module.scss'

import clsx from "clsx"; 
import { Link } from "react-router-dom";
 
const Chip = (props) => { 
    const{ 
        target,
        label,
        isActive, 
        onClick, 
        className,
        asLink,
        icon,
        theme
    } = props 
    const classes = clsx( 
        styles['chip-wrap'], 
        {   
            [styles["chip-wrap-dark"]]: theme === "dark",
            [styles["border-dark"]]: theme === "dark",
            [styles['active']]:isActive, 
            [className]: className,
        } 
    )
    const renderLabel = () => {
        return(
        <span className={styles["label"]}>
            {icon && (
            <div className={styles["icon-wrap"]}>
                <img src={icon} alt={label} />
            </div>
            )}
            {label}
        </span>
        )
    }

    if (asLink) {
        return(
            <Link target={target} to={asLink} className={classes}>
               {renderLabel()}
            </Link>
        )
    }

    return( 
        <div className={classes} onClick={onClick}> 
               {renderLabel()}
        </div> 
    ) 
} 
export default Chip