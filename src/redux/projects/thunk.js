import PROJECT_DATA, { SHORT_PROJECT_BY_SLUG } from "../../pages/projects/detail/data"
import { getProjectError, getProjectRequest, getProjectSuccess, getProjectsError, getProjectsRequest, getProjectsSuccess } from "./actions"


const fetchProjects = () => {
    return async (dispatch) => {
        dispatch(getProjectsRequest())
        try {
            dispatch(getProjectsSuccess(PROJECT_DATA))
        } catch(e) {
            dispatch(getProjectsError(e))
        }
    }
}


const fetchProjectBySlug = (slug) => {
    return async (dispatch) => {
        dispatch(getProjectRequest())
        try {
            dispatch(getProjectSuccess(SHORT_PROJECT_BY_SLUG(slug)))
        } catch(e) {
            dispatch(getProjectError(e))
        }
    }
}

export default{
    fetchProjectBySlug,
    fetchProjects
}