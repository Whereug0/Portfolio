import React from "react";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as SkillsIcon } from "../../assets/icons/skills.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/icons/projects.svg";
import { ReactComponent as ExperiencesIcon } from "../../assets/icons/experiences.svg";
import { ReactComponent as EducationIcon } from "../../assets/icons/education.svg";
import { ReactComponent as ResumeIcon } from "../../assets/icons/resume.svg";

import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../redux/theme/actions";

const BurgerMenu = (props) => {
  const { theme, isActiveBurgerMenu, setIsActiveBurgerMenu } = props;
  
  const dispatch = useDispatch();
  const navMenuClasses = clsx(styles["nav-menu"], {
    [styles["nav-menu-active"]]: isActiveBurgerMenu,
    [styles["nav-menu-light"]]: theme === "light",
  });

  const handleChangeTheme = () => {
    const body = document.querySelector("body");
    if (theme === "dark") {
      dispatch(changeTheme("light"));
      body.style.background = "#fff";
      localStorage.setItem("theme", "light");
    } else {
      dispatch(changeTheme("dark"));
      localStorage.setItem("theme", "dark");
      body.style.background = "#000";
    }
  };

  const handleQuitBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  return (
    <nav className={navMenuClasses}>
      <ul className={styles["nav-menu__list"]}>
        <div className={styles["pages"]}>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
            <Link className={styles["nav-menu__link"]} to={"/skills"}>
              <SkillsIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
              <span className={styles["nav-menu__text"]}>Skills</span>
            </Link>
          </li>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
            <Link className={styles["nav-menu__link"]} to={"/projects"}>
              <ProjectsIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
              <span className={styles["nav-menu__text"]}>Projects</span>
            </Link>
          </li>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
            <Link className={styles["nav-menu__link"]} to={"/experiences"}>
              <ExperiencesIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
              <span className={styles["nav-menu__text"]}>Experiences</span>
            </Link>
          </li>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
            <Link className={styles["nav-menu__link"]} to={"/education"}>
              <EducationIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
              <span className={styles["nav-menu__text"]}>Education</span>
            </Link>
          </li>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
            <Link className={styles["nav-menu__link"]} to={"/resume"}>
              <ResumeIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
              <span className={styles["nav-menu__text"]}>Resume</span>
            </Link>
          </li>
        </div>
        <div className={styles["icons"]}>
          <li
            onClick={handleQuitBurgerMenu}
            className={styles["nav-menu__item"]}
          >
            <Link className={styles["nav-menu__link"]} to={"/search"}>
              <SearchIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
              <span className={styles["nav-menu__text"]}>Search</span>
            </Link>
          </li>
          <li onClick={handleChangeTheme} className={styles["nav-menu__item"]}>
            {(theme === "light" || theme === false) && (
              <SunIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
            )}
            {theme === "dark" && (
              <MoonIcon
                className={styles["icon"]}
                width={"20px"}
                height={"20px"}
              />
            )}
            <span className={styles["theme-text"]}>
              {theme === "light" ? "Light" : "Dark"}
            </span>
            <span className={styles["nav-menu__text"]}>Theme</span>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
