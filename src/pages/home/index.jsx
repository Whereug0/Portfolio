import React from "react";

import styles from "./styles.module.scss";

import githubLogo from '../../assets/icons/icons-home-page/github-142-svgrepo-com.svg'
import linkedLogo from '../../assets/icons/icons-home-page/linkedin-svgrepo-com.svg'
import twitterLogo from '../../assets/icons/icons-home-page/twitter-154-svgrepo-com.svg'
import stackLogo from '../../assets/icons/icons-home-page/stackoverflow-svgrepo-com.svg'
import emailLogo from '../../assets/icons/icons-home-page/email-address-sign-at-inbox-svgrepo-com.svg'
import youtubeLogo from '../../assets/icons/icons-home-page/youtube-168-svgrepo-com.svg'
import facebookLogo from '../../assets/icons/icons-home-page/facebook-svgrepo-com.svg'
import SkillsSlider from "./skills-slider";


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles["content-box"]}>
        <div className={styles.content}>
          <h1>Name LASTNAME,</h1>
          <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
              rerum. Debitis accusantium deleniti enim iste dignissimos? Similique,
              exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis
              laudantium quaerat iure ipsum!
          </p>
        </div>
        <div className={styles.icons}>
          <img src={githubLogo}></img>
          <img src={linkedLogo}></img>
          <img src={twitterLogo}></img>
          <img src={stackLogo}></img>
          <img src={emailLogo}></img>
          <img src={youtubeLogo}></img>
          <img src={facebookLogo}></img>
        </div>
      </div>
      <SkillsSlider />
    </div>
  );
}

export default Home;
