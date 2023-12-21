import React from "react";
import styles from './styles.module.scss'

const Input = (props) => {
    const{
        value,
        onChange,
        type = "text"
    } = props
    return(
        <div className={styles["container"]}>
            <input 
                className={styles["input"]} 
                placeholder="Search..." 
                type={type} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Input