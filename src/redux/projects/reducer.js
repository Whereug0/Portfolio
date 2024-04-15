import { GET_PROJECTS_ERROR, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECT_BY_SLUG_ERROR, GET_PROJECT_BY_SLUG_REQUEST, GET_PROJECT_BY_SLUG_SUCCESS } from "./types"



const initialState = {
    isFetching: false,
    list: [],
    data: null,
    error: null
}

const projectReduser = (state = initialState,action) => {
    switch (action.type){
        case GET_PROJECTS_REQUEST:
            return{
                ...state,
                isFetching:true
            }
        case GET_PROJECTS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                list:action.payload
            }
        case GET_PROJECTS_ERROR:
            return{
                ...state,
                isFetching:false,
                error: action.payload
            }
        case GET_PROJECT_BY_SLUG_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case GET_PROJECT_BY_SLUG_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data:action.payload
            }
        case GET_PROJECT_BY_SLUG_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: 
            return state
}} 


export default projectReduser