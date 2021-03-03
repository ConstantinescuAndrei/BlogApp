import userReducer from './user';
import blogReducer from './blog';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    user: userReducer,
    blog: blogReducer
});

export default allReducers;
