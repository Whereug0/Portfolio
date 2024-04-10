import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
const BoxLayout = (props) => {
  const { children, className, theme } = props;

  const boxClasses = clsx(styles["box-layout"], {
    [styles["box-layout-dark"]]: theme === "dark",
    [className]: className,
  });

  return <div className={boxClasses}>{children}</div>;
};

export default BoxLayout;
