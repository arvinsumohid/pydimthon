import { combineReducers } from 'redux';
import user from './user';
import lessons from './lessons';


export default combineReducers({
    user,
    lessons
})