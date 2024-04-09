import React from "react";
import styles from './styles.module.scss'
import carboneCode from '../../assets/icons/carbonCode.svg'
import skillsIcon from '../../assets/icons/skills.svg'
import projectsIcon from '../../assets/icons/projects.svg'
import experiencesIcon from '../../assets/icons/experiences.svg'
import educationIcon from '../../assets/icons/education.svg'
import resumeIcon from '../../assets/icons/resume.svg'
// import searchIcon from '../../assets/icons/search.svg'
import dark from '../../assets/icons/moon.svg'
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className={styles.container}>
            <header>
                <nav>
                    <Link className={styles.hidden} to={'/'}>
                        <img src={carboneCode} alt="#" />
                        <span>Whereugo</span>
                    </Link>
                    <div className={styles.navMenu}>
                    
                        <Link to='/skills'>
                            <img src={skillsIcon} alt="" />
                            Skills
                        </Link>
                        <Link to={'/projects'}>
                            <img src={projectsIcon} alt="" />
                            Projects
                        </Link>
                        <Link to={'/experiences'}>
                            <img src={experiencesIcon} alt="" />
                            Experiences
                        </Link>
                        <Link to={'/education'}>
                            <img src={educationIcon} alt="" />
                            Education
                        </Link>
                        <Link to={'/resume'}>
                            <img src={resumeIcon} alt="" />
                            Resume
                        </Link>
                    </div>
                    <div className={styles.search_dark_light}>
                        <Link to={'/search'}>
                            {/* <img src={searchIcon} alt="" /> */}
                        </Link>
                        <a href="#">
                            <img src={dark} alt="" />
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header