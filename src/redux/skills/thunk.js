import { getSkillError, getSkillRequest, getSkillSuccess, getSkillsError, getSkillsSuccess, getSkillsRequest } from "./actions"
import { SKILLS_DATA, SHORT_SKILL_BY_SLUG } from '../../pages/skills/data'


const fetchSkills = () => {
    return async (dispatch) => {
        dispatch(getSkillsRequest())
        try {
            dispatch(getSkillsSuccess(SKILLS_DATA))
        } catch(e) {
            dispatch(getSkillsError(e))
        }
    }
}

const fetchSkillBySlug = (slug) => {
    return async (dispatch) => {
        dispatch(getSkillRequest())
        try {
            dispatch(getSkillSuccess(SHORT_SKILL_BY_SLUG(slug)))
        } catch(e) {
            dispatch(getSkillError(e))
        }
    }
}

export  default {
    fetchSkills,
    fetchSkillBySlug
}