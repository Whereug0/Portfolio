import React from "react";
import styles from "./styles.module.scss";
import BoxLayout from "../../../components/box-layout/index";
import CardLink from "../../../components/card-link/index";
import Chip from "../../../components/chip";
import LinkIcon from '../../../assets/icons/carbon-link.svg'
import ChipIcon from "../../../components/chip-icon";


const ProjectCard = (props) => {
    const {
        project,
    } = props

  return (
    <div className={styles["project-card-wrap"]}>
      <BoxLayout>
        <div className={styles["img-box"]}>
          <img src={project.icon} alt="img" className="img-logo"/>
        </div>
        <div className={styles["title-link"]}>
          <h3>{project.name}</h3>
          {project.links.map((link) => (
            (
              <CardLink key={link.id} to={link.link} label={link.label} target ="_blank"></CardLink>
            )
          ))}
        </div>
        <div className={styles["template"]}>
            <p>Website Template</p>

        </div>
        <div className={styles["description"]}>
          <p>{project.description}</p>
        </div>
        <div className={styles["chips"]}>
            <Chip label = "December 2023"/>
            <Chip label = "now"/>
        </div>
        <div className={styles["project-list"]}>
          {project.skills.map((skill, idx) => {
            return (
              <ChipIcon  to={`/skills/${skill.slug}`} label = {skill.label} icon={skill.image}/>
            )
          })}
        </div>
        

      </BoxLayout>
    </div>
  );
};

export default ProjectCard;
