import React from "react";
import styles from './styles.module.scss';

import searchIcon from '../../assets/icons/search.svg';
import carboneCode from '../../assets/icons/carbonCode.svg';
import skillsIcon from '../../assets/icons/skills.svg';
import projectsIcon from '../../assets/icons/projects.svg';
import experiencesIcon from '../../assets/icons/experiences.svg';
import educationIcon from '../../assets/icons/education.svg';
import resumeIcon from '../../assets/icons/resume.svg';
import dark from '../../assets/icons/moon.svg';
import light from '../../assets/icons/sun.svg'

import { Link } from "react-router-dom";
function Header() {
    return (    
            <header className={styles.header}>
                <nav className={styles.header}>
                    <Link className={styles.hidden} to={'/'}>
                        <img src={carboneCode} alt="carboneCode" />
                        <span>Whereugo</span>
                    </Link>
                    <div className={styles.navMenu}>
                    
                        <Link to='/skills'>
                            <img src={skillsIcon} alt="skillsIcon" />
                            Skills
                        </Link>
                        <Link to={'/projects'}>
                            <img src={projectsIcon} alt="projectsIcon" />
                            Projects
                        </Link>
                        <Link to={'/experiences'}>
                            <img src={experiencesIcon} alt="experiencesIcon" />
                            Experiences
                        </Link>
                        <Link to={'/education'}>
                            <img src={educationIcon} alt="educationIcon" />
                            Education
                        </Link>
                        <Link to={'/resume'}>
                            <img src={resumeIcon} alt="resumeIcon" />
                            Resume
                        </Link>
                    </div>
                    <div className={styles.search_dark_light}>
                        <Link to={'/search'}>
                            <img src={searchIcon} alt="searchIcon" />
                        </Link>
                        <a href="#">
                            <img src={light} alt="light" />
                        </a>
                    </div>
                </nav>
            </header>
    )
}

export default Header