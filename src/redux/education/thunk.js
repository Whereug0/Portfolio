import { EDUCATION_DATA } from "../../pages/education/data";
import {
  getEducationError,
  getEducationRequest,
  getEducationSuccess,
} from "./actions";

const fetchEducation = () => {
  return async (dispatch) => {
    dispatch(getEducationRequest());
    try {
      dispatch(getEducationSuccess(EDUCATION_DATA));
    } catch (e) {
      dispatch(getEducationError(e));
    } finally {
    }
  };
};

export default { fetchEducation };
