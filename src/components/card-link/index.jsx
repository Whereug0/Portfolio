import React from "react";
import {ReactComponent as LinkIcon} from '../../assets/icons/carbon-link.svg'
import { Link } from "react-router-dom";
import styles from './styles.module.scss'

const CardLink = (props) => {
    function linkGit(event) {
        event.stopPropagation()
    }

    const {
        target,
        to,
        label,
    } = props
    return(
        <a target={target} href={to} data-label={label} className={styles["card-link"]} onClick={linkGit}>
            <LinkIcon />
        </a>
    )
}

export default CardLink