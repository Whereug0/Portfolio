import React from "react";
import BoxLayout from "../../../components/box-layout";
import ChipIcon from "../../../components/chip-icon";
import Exp from "../../../components/exp";
import { ReactComponent as ConditionIcon } from "./../../../assets/icons/condition-point.svg";
import { clsx } from "clsx";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ExperienceCard = (props) => {
  const { className, data, theme } = props;

  const cardClasses = clsx(styles["card-box"], {
    [className]: className,
  });
  const dateTextClasses = clsx(styles["date-text"], {
    [styles["date-text-dark"]]: theme === "dark",
  });
  const conditionWrapClasses = clsx(styles["condition-icon-wrap"], {
    [styles["condition-icon-wrap-dark"]]: theme === "dark",
  });
  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });
  const experienceClasses = clsx(styles["experience"], {
    [styles["experience-dark"]]: theme === "dark",
  });

 

  return (
    <div className={cardClasses}>
      <Link className={styles["link"]} to={`/experiences/${data.name}`}>
        <BoxLayout theme={theme} className={styles["card"]}>
          <div className={styles["img-wrap"]}>
            <img src={data.image} alt="No Img" />
          </div>
          <div className={styles["body"]}>
            <h6 className={titleClasses}>{data.title}</h6>
            <div className={styles["exps-wrap"]}>
              {data &&
                data.types &&
                data.types.map((type, idx) => {
                  return (
                    <Exp
                      key={type.id}
                      theme={theme}
                      className={styles["exp"]}
                      value="Company: Self employed"
                      type={type.type}
                    />
                  );
                })}
            </div>
            <div className={styles["date"]}>
              <span className={dateTextClasses}>
                {data.workPeriodFrom} - {data.workPeriodTo} · {data.duration}
              </span>
            </div>
            <div className={experienceClasses}>
              <span className={styles["experience-text"]}>
                Creating awesome tools for developers.
              </span>
            </div>
            <div className={styles["chip-icons-wrap"]}>
              {data &&
                data.skills &&
                data.skills.map((skill, idx) => {
                  return (
                    <ChipIcon
                      key={skill.id}
                      theme={theme}
                      className={styles["icon"]}
                      label={"Javascript"}
                      to={"/skills/js"}
                      icon={skill.image}
                    />
                  );
                })}
            </div>
          </div>
        </BoxLayout>
      </Link>
      <div className={conditionWrapClasses}>
        <ConditionIcon
          fill={theme === "dark" ? "#fff" : "#000"}
          className={styles["condition-icon"]}
        />
      </div>
    </div>
  );
};

export default ExperienceCard;