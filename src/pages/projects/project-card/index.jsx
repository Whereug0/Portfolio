import React from "react";
import styles from "./styles.module.scss";
import BoxLayout from "../../../components/box-layout/index";
import CardLink from "../../../components/card-link/index";
import Chip from "../../../components/chip";
import LinkIcon from '../../../assets/icons/carbon-link.svg'
import TsIcon from '../../../assets/images/ts.png'
const ProjectCard = (props) => {
    const {
        date,
        description,
        image    
    } = props

  return (
    <div className={styles["project-card-wrap"]}>
      <BoxLayout>
        <div className={styles["img-box"]}>
          <img src={image} alt="img" className="img-logo"/>
        </div>
        <div className={styles["title-link"]}>
          <h3>Slick Portfolio</h3>
          <CardLink to="https://github.com/Whereug0" label="GitHub" target='_blank' icon={LinkIcon}/>
        </div>
        <div className={styles["template"]}>
            <p>Website Template</p>
            <p>{date}</p>
        </div>
        <div className={styles["description"]}>
          <p>
            {description}
          </p>
        </div>
        <div className={styles["chips"]}>
            <Chip label = "December 2023"/>
            <Chip label = "now"/>
        </div>
        <div className={styles["ts-link"]}>
            <CardLink to="/skills/ts" label ="TypeScript" target="_self" icon = {TsIcon} />
        </div>
      </BoxLayout>
    </div>
  );
};

export default ProjectCard;
