import getCategory from "./category";
import getKitten from './kitten';
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    category:getCategory,
    kitten:getKitten
})

export default rootReducer;