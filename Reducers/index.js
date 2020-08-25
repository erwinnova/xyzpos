import { combineReducers } from 'redux';
import LoginFormReducer from './LoginFormReducer';
import UserReducer from './UserReducer';

export default combineReducers({
    loginForm : LoginFormReducer,
    user: UserReducer
})