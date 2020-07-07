import { combineReducers } from 'redux';
import user from './user';
import lessons from './Lessons';


export default combineReducers({
    user,
    lessons
})