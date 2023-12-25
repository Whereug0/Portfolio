import { GET_SKILLS_ERROR, GET_SKILLS_REQUEST, GET_SKILLS_SUCCESS, GET_SKILL_BY_SLUG_ERROR, GET_SKILL_BY_SLUG_REQUEST, GET_SKILL_BY_SLUG_SUCCESS } from "./types"

const initialState = {
    isFetching: false,
    list: [],
    data: null,
    error: null
}


const skillReduser=(state=initialState,action)=>{
    switch (action.type){
        case GET_SKILLS_REQUEST:
            return{
                ...state,
                initialState:true
            }
        case GET_SKILLS_SUCCESS:
            return {
                ...state,
                initialState: false,
                list:action.payload
            }
        case GET_SKILLS_ERROR:
            return {
                ...state,
                initialState:false,
                error: action.payload
            }

        case GET_SKILL_BY_SLUG_REQUEST:
            return{
                ...state,
                initialState:true
            }
        case GET_SKILL_BY_SLUG_SUCCESS:
            return {
                ...state,
                initialState: false,
                data:action.payload
            }
        case GET_SKILL_BY_SLUG_ERROR:
            return {
                ...state,
                initialState:false,
                error: action.payload
            }
        default:
            return state
}}

export {
    skillReduser
}