import axios from 'axios';
import { API_URL } from '../helper/apiurl';
import { 
    INPUT_LOGIN_TXT, 
    LOADING_LOGIN, 
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REG_FAIL
} from './types';

export const onInputLoginForm = (prop, value) => {
    return {
        type: INPUT_LOGIN_TXT,
        payload: {
            prop, value
        }
    }
}

export const login = ({ email, password}) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING_LOGIN })

            const res = await axios.post(API_URL + '/user/login', { email, password })

            await localStorage.setItem('usertoken', res.data.token)
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data
            })
        } catch(err) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: err.response ? err.response.data.message : err.message
            })
        }
    }
}