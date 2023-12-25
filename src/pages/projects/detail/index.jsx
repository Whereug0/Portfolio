import React from "react";
import styles from './styles.module.scss'
import { useParams } from "react-router-dom";



const DetailProject = () => {
    const {id} = useParams()
    
    return(
        <div>
            detail projects - {id}
        </div>
    )
}


export default DetailProject