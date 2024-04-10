import React, { useDebugValue, useEffect } from "react";
import styles from './styles.module.scss'
import SearchBar from "../../components/search-bar";
import Chip from "../../components/chip";
import ProjectCard from "./project-card";
import { useDispatch, useSelector } from "react-redux";
import projectsOperations from '../../redux/projects/thunk'
import { Link } from "react-router-dom";

function Projects() {
    const projects = useSelector(state => state.projects.list)
    const theme = useSelector((state) => state.theme);

    const isLoading = useSelector(state => state.projects.isFetching)
    const dispatch = useDispatch()
    const {fetchProjects} = projectsOperations

    useEffect(() => {
        dispatch(fetchProjects())
    },[])

    if (isLoading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return (
        <div className={styles["project-wrap-page"]}>
            <SearchBar title="Projects"/>
            <div className={styles["chips-wrap"]}>
                <Chip theme={theme} label = "TypeScript"/>
                <Chip theme={theme} label = "Sass"/>
                <Chip theme={theme} label = "React"/>
            </div>
            <div className={styles["cards"]}>
                {projects.map(project => {
                    return (
                        <Link to={`/projects/${project.id}`} key={project.id}>
                            <ProjectCard 
                                theme={theme}
                                title={project.label}
                                project={project}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects