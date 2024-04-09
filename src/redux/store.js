import {applyMiddleware,combineReducers,createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import skillReduser from "./skills/reducer";
import projectReduser from "./projects/reducer";
import experienceReducer from './experience/reducer';
import educationReducer from './education/reducer';
import themeReducer from './theme/reducer';

const rootReducer = combineReducers({
    skills: skillReduser,
    projects: projectReduser,
    experiences: experienceReducer,
    education: educationReducer,
    theme: themeReducer,
})


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)