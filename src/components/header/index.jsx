import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { changeTheme } from "../../redux/theme/actions";

import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/icons/moon.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as CarboneCode } from "../../assets/icons/carbonCode.svg";
import { ReactComponent as SkillsIcon } from "../../assets/icons/skills.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/icons/projects.svg";
import { ReactComponent as ExperiencesIcon } from "../../assets/icons/experiences.svg";
import { ReactComponent as EducationIcon } from "../../assets/icons/education.svg";
import { ReactComponent as ResumeIcon } from "../../assets/icons/resume.svg";

function Header() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const themeIconClasses = clsx(styles["header__icons"], {
    [styles["light-icon"]]: theme === "light" || theme === false,
    [styles["dark-icon"]]: theme === "dark",
  });

  const headerItemDarkHoverClasses = clsx(styles["header__item"], {
    [styles["header__item-dark"]]: theme === "dark",
    [styles["header__item-hidden"]]: isActiveBurgerMenu,
  });

  const handleChangeTheme = () => {
    const body = document.querySelector("body");
    if (theme === "dark") {
      dispatch(changeTheme("light"));
      body.style.background = "#fff";
      localStorage.setItem("theme", "light");
    } else if (isActiveBurgerMenu) {
      body.style.overflow = "hidden";
    } else {
      dispatch(changeTheme("dark"));
      localStorage.setItem("theme", "dark");
      body.style.background = "#000";
    }
  };

  const handleShowBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (localStorage.getItem("theme") === "dark") {
      dispatch(changeTheme("dark"));
      body.style.background = "#000";
    }
    if (localStorage.getItem("light") === "dark") {
      dispatch(changeTheme("light"));
      body.style.background = "#fff";
    }
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.header}>
        <Link className={styles.hidden} to={"/"}>
          <div className={headerItemDarkHoverClasses}>
            <CarboneCode />
            <span>Whereugo</span>
          </div>
        </Link>
        <div className={styles.navMenu}>
          <Link className={styles.link} to="/skills">
            <div className={headerItemDarkHoverClasses}>
              <SkillsIcon />
              Skills
            </div>
          </Link>
          <Link className={styles.link} to={"/projects"}>
            <div className={headerItemDarkHoverClasses}>
              <ProjectsIcon />
              Projects
            </div>
          </Link>
          <Link className={styles.link} to={"/experiences"}>
            <div className={headerItemDarkHoverClasses}>
              <ExperiencesIcon />
              Experiences
            </div>
          </Link>
          <Link className={styles.link} to={"/education"}>
            <div className={headerItemDarkHoverClasses}>
              <EducationIcon />
              Education
            </div>
          </Link>
          <Link className={styles.link} to={"/resume"}>
            <div className={headerItemDarkHoverClasses}>
              <ResumeIcon />
              Resume
            </div>
          </Link>
        </div>
        <div className={styles.search_dark_light}>
          <Link
            className={clsx(styles["header__icons-wrap"], {
              [styles["header__icons-dark"]]: theme === "dark",
            })}
            to={"/search"}
          >
            <div className={styles["search-icon-wrap"]}>
              <SearchIcon className={styles["header__icons"]} />
            </div>
          </Link>
          <div
            onClick={handleChangeTheme}
            className={clsx(styles["light-icon-wrap"], {
              [styles["light-icon-dark"]]: theme === "dark",
            })}
          >
            {(theme === "light" || theme === false) && (
              <SunIcon className={themeIconClasses} />
            )}
            {theme === "dark" && <MoonIcon className={themeIconClasses} />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
