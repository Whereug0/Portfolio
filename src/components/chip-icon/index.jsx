import React from "react";
import styles from './styles.module.scss'
import { Link } from "react-router-dom";
import clsx from "clsx";


const ChipIcon = (props) => {
    const { to, icon, label, className, theme } = props;
    const classes = clsx(styles["chip-icon"], {
      [className]: className,
      [styles["chip-icon-dark"]]: theme === "dark",
    });
    return (
      <Link data-label={label} to={to} className={classes}>
        <div className={styles["img-wrap"]}>
          <img src={icon} alt={"icon"} />
        </div>
      </Link>
    );
  };
  
  export default ChipIcon;