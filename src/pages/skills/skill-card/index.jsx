import React from "react";
import styles from "./styles.module.scss";
import BoxLayout from "../../../components/box-layout";
import clsx from "clsx";
import { useSelector } from "react-redux";

const SkillCard = (props) => {
  const { image, title } = props;
  const theme = useSelector((state) => state.theme);

  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });

  const cardClasses = clsx(styles["skill-card"], {
    [styles["card-dark"]]: theme === "dark",
  });

  const imgClasses = clsx(styles["image-wrap"], {
    [styles["img-dark"]]: theme === "dark",
  });

  return (
    <BoxLayout className={cardClasses}>
      <h3 className={titleClasses}>{title}</h3>
      <div className={imgClasses}>
        <img src={image} alt="Skill logo" />
      </div>
    </BoxLayout>
  );
};

export default SkillCard;
