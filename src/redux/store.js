import {applyMiddleware,combineReducers,createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { skillReduser } from "./skills/reducer";
import { projectReduser } from "./projects/reducer";
const rootReducer=combineReducers({
    skills: skillReduser,
    projects: projectReduser,
    experiences:[]
})
export const  store=createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)