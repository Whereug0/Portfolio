import  { PROJECTS_DATA, PROJECT_BY_ID } from "../../pages/projects/detail/data";
import {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsError,


  getProjectRequest,
  getProjectSuccess,
  getProjectError,
} from "./actions";

const fetchProjects = () => {
  return async (dispatch) => {
    dispatch(getProjectsRequest());
    try {

      dispatch(getProjectsSuccess(PROJECTS_DATA));
    } catch (e) {
      dispatch(getProjectsError(e));
    } finally {
    }
  };
};

const fetchProjectById = (id) => {
  return async (dispatch) => {
    dispatch(getProjectRequest());
    try {

      dispatch(getProjectSuccess(PROJECT_BY_ID(id)));
    } catch (e) {
      dispatch(getProjectError(e));
    } finally {
    }
  };
};

export default { fetchProjects, fetchProjectById };
