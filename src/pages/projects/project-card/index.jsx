import React from "react";
import styles from "./styles.module.scss";
import BoxLayout from "../../../components/box-layout/index";
import CardLink from "../../../components/card-link/index";
import Chip from "../../../components/chip";
import ChipIcon from "../../../components/chip-icon";

import clsx from "clsx";

const ProjectCard = (props) => {
  const { project, theme } = props;



  const cardClasses = clsx(styles["project-card-wrap"], {
    [styles["project-card-dark"]]: theme === "dark",
  });

  const templateClasses = clsx(styles["template"], {
    [styles["template-dark"]]: theme === "dark",
  });

  return (
    <div className={cardClasses}>
      <BoxLayout theme={theme}>
        <div className={styles["img-box"]}>
          <img src={project.icon} alt="img" className="img-logo" />
        </div>
        <div className={styles["title-link"]}>
          <h3>{project.name}</h3>
          {project.links.map((link) => (
            <CardLink
              theme={theme}
              key={link.id}
              to={link.link}
              label={link.label}
              target="_blank"
            ></CardLink>
          ))}
        </div>
        <div className={templateClasses}>
          <p>Website Template</p>
        </div>
        <div className={styles["description"]}>
          <p>{project.description}</p>
        </div>
        <div className={styles["chips"]}>
          <Chip theme={theme} label="December 2023" />
          <Chip theme={theme} label="now" />
        </div>
        <div className={styles["project-list"]}>
          {project.skills.map((skill, idx) => {
            return (
              <ChipIcon
                theme={theme}
                to={`/skills/${skill.slug}`}
                label={skill.label}
                icon={skill.image}
              />
            );
          })}
        </div>
      </BoxLayout>
    </div>
  );
};

export default ProjectCard;
