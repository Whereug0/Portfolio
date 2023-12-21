import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import clsx from "clsx";
import {ReactComponent as ArrowIcon} from '../../../assets/icons/arrow-icon.svg';
import {Autoplay} from 'swiper/modules';

import JsImg from '../../../assets/images/js.png'
import TsImg from '../../../assets/images/ts.png'
import CssImg from '../../../assets/images/1200px-CSS.3.svg.png'
import HtmlImg from '../../../assets/images/html.svg'
import SassImg from '../../../assets/images/sass.png'
import ReactImg from '../../../assets/images/react.svg'
import SvelteImg from '../../../assets/images/svelte.png'


const SkillsSlider = (props) => {
    const {

    } = props

    const [swiperInstance, setSwiperInstance] = useState(null)

    return(
        <div className={styles["slider-wrap"]}>
            <button
                className = {clsx(styles['slider-nav-button'], styles['left'])}
                onClick ={() => swiperInstance.slidePrev()}
            >
                <ArrowIcon />
            </button>
            <Swiper
                modules={[Autoplay]}
                loop={true}

                autoplay = {{delay: 2500}}
                className={styles['slider']}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                >
                <SwiperSlide className={styles['slider__item']}>
                    <img className={styles["img-slider"]} src={JsImg} alt="js-img"/>
                    <p>JavaScript</p>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <img className={styles["img-slider"]} src={TsImg} alt="ts-img" />
                    <p>TypeScript</p>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <img className={styles["img-slider-css"]} src={CssImg} alt="css-img" />
                    <p>CSS</p>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <img className={styles["img-slider"]} src={HtmlImg} alt="html-img" />
                    <p>HTML</p>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <img className={styles["img-slider"]} src={SassImg} alt="sass-img" />
                    <p>Sass</p>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <img className={styles["img-slider"]} src={ReactImg} alt="react-img" />
                    <p>Reacr Js</p>
                </SwiperSlide>
                <SwiperSlide className={styles['slider__item']}>
                    <img className={styles["img-slider"]} src={SvelteImg} alt="svelte-img" />
                    <p>Svelte</p>
                </SwiperSlide> 
            </Swiper> 
            <button 
                    className = {clsx(styles['slider-nav-button'], styles['right'])}
                    onClick={() => swiperInstance.slideNext()}>
                    <ArrowIcon />
            </button>
        </div>
    )
}


export default SkillsSlider