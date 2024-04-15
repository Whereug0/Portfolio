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


const fetchProjectById = (id) => {
    return async (dispatch) => {
        dispatch(getProjectRequest())
        try {
            dispatch(getProjectSuccess(SHORT_PROJECT_BY_SLUG(id)))
        } catch(e) {
            dispatch(getProjectError(e))
        }
    }
}

export default{
    fetchProjectById,
    fetchProjects
}