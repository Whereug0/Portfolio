import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { SKILLS_BY_NAME } from "../data";
import { useSelector } from "react-redux";
import clsx from "clsx";

const DetailSkill = () => {
  const { slug } = useParams();
  const theme = useSelector((state) => state.theme)
  
  const descriptionClasses = clsx(styles["description"],{
    [styles["description-dark"]]: theme === "dark",
  })

  const titleClasses = clsx(styles["title"],{
    [styles["title-dark"]]: theme === "dark",
  })

  const imageWrapClasses = clsx(styles["image-wrap"],{
    [styles["image-wrap-dark"]]: theme === "dark",
  })

  const [skillByName, setSkillByName] = useState(null);
  useEffect(() => {
    setSkillByName(SKILLS_BY_NAME(slug));
  }, []);

  if (!skillByName) {
    return null;
  }

  return (
    <div className={styles["detail-page-wrap"]}>
      <div className={styles["title-wrap"]}>
        <h1 className={titleClasses}>{skillByName.label}</h1>
        <div className={imageWrapClasses}>
          <img src={skillByName.image} alt={skillByName.name} />
        </div>
      </div>
      <p className={descriptionClasses}>{skillByName.description}</p>
    </div>
  );
};

export default DetailSkill;
