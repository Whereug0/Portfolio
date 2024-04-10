import React from "react";
import {ReactComponent as LinkIcon} from '../../assets/icons/carbon-link.svg'
import styles from './styles.module.scss'
import clsx from "clsx";

const CardLink = (props) => {
    const {
        theme,
        target,
        to,
        label,
    } = props

    function linkGit(event) {
        event.stopPropagation()
    }


    const cardLinkClasses = clsx(styles["card-link"], {
        [styles["card-link-dark"]]: theme === "dark",
    });

    const linkClasses = clsx(styles['link-icon'], {
        [styles["link-icon-dark"]]: theme === "dark"
    })

    return(
        <a target={target} href={to} data-label={label} className={cardLinkClasses} onClick={linkGit}>
            <LinkIcon className={linkClasses}/>
        </a>
    )
}

export default CardLink