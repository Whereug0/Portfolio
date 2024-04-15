import React, { useEffect } from "react";
import styles from './styles.module.scss';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import projectsOperation from "../../../redux/projects/thunk";
import clsx from "clsx";
import BoxTitle from '../../../components/box-title';
import Chip from '../../../components/chip';
import linkIcon from '../../../assets/icons/paper-clip.svg';
import BoxImage from "../../../components/box-image";

const DetailProject = () => {
  
  const { id } = useParams();
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const { fetchProjectById } = projectsOperation;
  const data = useSelector((state) => state.projects.data);

  const project = {
    ...data,
  };

  const borderClasses = clsx(styles["border"], {
    [styles["border-dark"]]: theme === "dark",
  });
  const descriptionWrapClasses = clsx(styles["description-wrap"], {
    [styles["description-wrap-dark"]]: theme === "dark",
  });
  const textClasses = clsx(styles["text"], {
    [styles["text-dark"]]: theme === "dark",
  });

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, []);

  const renderScreenshots = () => {
    if (project.screenshots) {
      return (
        project &&
        project.screenshots &&
        project.screenshots.map((screenshot) => {
          return (
            <div className={styles["screenshot-container"]}>
              <img
                className={styles["screenshot"]}
                src={screenshot.image}
                alt="screenshot"
              />
            </div>
          );
        })
      );
    }
  };

  return (
    <section key={project.id} className={styles["detail-wrap"]}>
      <BoxTitle className={styles["title-box"]}>
        <div className={styles["title-wrap"]}>
          <div className={styles["title"]}>{project.name}</div>
          <span className={styles["text"]}>Website Template</span>
          <BoxImage image={project.icon} />
          <div className={borderClasses}></div>
        </div>
        <div className={styles["chips-wrap"]}>
          <Chip
            theme={theme}
            className={styles["chip"]}
            marginBottom
            icon={linkIcon}
            target="_blank"
            label="Github"
            asLink="https://github.com/Whereug0/my-shop"
          />
          <div className={styles["skills-wrap"]}>
            {project &&
              project.skills &&
              project.skills.map((skill) => {
                return (
                  <Chip
                    key={skill.id}
                    theme={theme}
                    className={styles["chip"]}
                    icon={skill.image}
                    label={skill.label}
                    asLink={`/skills/${skill.slug}`}
                  />
                );
              })}
          </div>
        </div>
      </BoxTitle>
      <div className={descriptionWrapClasses}>
        <p className={styles["description"]}>{project.description}</p>
      </div>
      <div className={styles["screenshot-images-wrap"]}>
        {renderScreenshots()}
      </div>
      {project &&
        (!project.screenshots || project.screenshots.length === 0) && (
          <div className={styles["screenshots-wrap"]}>
            {/* <WithoutIcon
              className={styles["img"]}
              fill={theme === "dark" ? "#2E2E2E" : "#E1E1E1"}
            /> */}
            <div className={styles["screenshots-text"]}>
              <p className={textClasses}>No screenshot</p>
            </div>
          </div>
        )}
    </section>
  );
};

export default DetailProject;
