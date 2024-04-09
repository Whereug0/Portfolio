import React from "react";

import styles from "./styles.module.scss";

import githubLogo from '../../assets/icons/icons-home-page/github-142-svgrepo-com.svg'
import linkedLogo from '../../assets/icons/icons-home-page/linkedin-svgrepo-com.svg'
import emailLogo from '../../assets/icons/icons-home-page/email-address-sign-at-inbox-svgrepo-com.svg'
import SkillsSlider from "./skills-slider";


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles["content-box"]}>
        <div className={styles.content}>
          <h1>Elbar Beksultanov</h1>
          <p>
            Привет! Я Frontend developer
          </p>
          <p>
            Создаю интерфейсы для сайтов и веб-приложений. Отвечаю за то, с чем пользователи взаимодействуют на страницах: текст, изображения, анимации, кнопки, формы, слайдеры, галереи и прочие «красивости».
          </p>
          <p style={{fontWeight: 600, marginTop: 10}}>
            Здесь вы можете посмотреть мое портфолио, оценить уровень моих работ.
          </p>
        </div>
        <div className={styles.icons}>
          <img src={githubLogo}></img>
          <img src={linkedLogo}></img>
          <img src={emailLogo}></img>
        </div>
      </div>
      <SkillsSlider />
    </div>
  );
}

export default Home;
