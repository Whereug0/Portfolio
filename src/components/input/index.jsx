import React from "react";
import styles from './styles.module.scss';
import clsx from "clsx";
const Input = (props) => {
    const{
        theme,
        value,
        onChange,
        type = "text"
    } = props

    const inputClasses = clsx(styles["input"], {
        [styles["input-dark"]]: theme === "dark",
      });

    return(
        <div className={styles["container"]}>
            <input
                className={inputClasses} 
                placeholder="Search..." 
                type={type} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Input