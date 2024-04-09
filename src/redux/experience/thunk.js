import {
  EXPERIENCE_BY_NAME,
  EXPERIENCE_DATA,
} from "../../pages/experiences/data";
import {
  getExperienceError,
  getExperienceRequest,
  getExperiencesError,
  getExperiencesRequest,
  getExperiencesSucces,
  getExperienceSuccess,
} from "./actions";

const fetchExperiences = () => {
  return async (dispatch) => {
    dispatch(getExperiencesRequest());
    try {
      dispatch(getExperiencesSucces(EXPERIENCE_DATA));
    } catch (e) {
      dispatch(getExperiencesError(e));
    } finally {
    }
  };
};

const fetchExperienceByName = (name) => {
  return async (dispatch) => {
    dispatch(getExperienceRequest());
    try {

      dispatch(getExperienceSuccess(EXPERIENCE_BY_NAME(name)));
    } catch (e) {
      dispatch(getExperienceError(e));
    } finally {
    }
  };
};

export default {
  fetchExperiences,
  fetchExperienceByName,
};
