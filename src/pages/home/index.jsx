import React from "react";
import styles from "./styles.module.scss";

import {ReactComponent as GithubLogo} from '../../assets/icons/icons-home-page/github-142-svgrepo-com.svg';
import linkedLogo from '../../assets/icons/icons-home-page/linkedin-svgrepo-com.svg';
import {ReactComponent as EmailLogo} from '../../assets/icons/icons-home-page/email-address-sign-at-inbox-svgrepo-com.svg';
import {ReactComponent as VkLogo} from '../../assets/icons/icons-home-page/vk.svg'
import {ReactComponent as TelegramLogo} from '../../assets/icons/icons-home-page/telegram.svg'

import SkillsSlider from "./skills-slider";
import { useSelector } from "react-redux";
import clsx from "clsx";

function Home() {
  const theme = useSelector((state) => state.theme);

  const Classes = clsx(styles["content"], {
    [styles["content-dark"]]: theme === "dark",
  });


  return (
    <div className={styles.container}>
      <div className={styles["content-box"]}>
        <div className={Classes}>
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
          <a target="blank" href="https://vk.com/whereugo">
            <VkLogo />
          </a>
          <a target="blank" href="https://t.me/el1eo">
            <TelegramLogo />
          </a>
          <div className={styles.logo}>
            <EmailLogo />:
            elbar.ace@mail.ru
          </div>
          {/* <img src={githubLogo}></img>
          <img src={linkedLogo}></img>
          <img src={emailLogo}></img> */}
        </div>
      </div>
      <SkillsSlider />
    </div>
  );
}

export default Home;
