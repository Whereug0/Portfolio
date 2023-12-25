import React from "react";
import styles from "./styles.module.scss";
import BoxLayout from "../../../components/box-layout/index";
import CardLink from "../../../components/card-link/index";
import Chip from "../../../components/chip";
import LinkIcon from '../../../assets/icons/carbon-link.svg'
import TsIcon from '../../../assets/images/ts.png'
import ChipIcon from "../../../components/chip-icon";
import { Link } from "react-router-dom";
const ProjectCard = (props) => {
    const {
        project,
    } = props

  return (
    <Link to = {`/projects/${project.id}`} className={styles["project-card-wrap"]}>
      <BoxLayout>
        <div className={styles["img-box"]}>
          <img src={project.icon} alt="img" className="img-logo"/>
        </div>
        <div className={styles["title-link"]}>
          <h3>{project.name}</h3>
          <CardLink to="https://github.com/Whereug0" label="GitHub" target='_blank' icon={LinkIcon}/>
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
        <div className={styles["skill-list"]}>
          {project.skills.map((skill, idx) => {
            return (
              <ChipIcon  to={`/skills/${skill.slug}`} label = "TypeScript" icon={TsIcon}/>
            )
          })}
          
        </div>
      </BoxLayout>
    </Link>
  );
};

export default ProjectCard;
