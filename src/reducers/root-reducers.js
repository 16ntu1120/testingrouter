import {combineReducers} from 'redux';
import clientreducer from "./client-reducer";
import userReducer from './user-reducer'
const rootReducer = combineReducers({
    clientreducer,userReducer
});
export default rootReducer; 