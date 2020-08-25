import {
    INPUT_LOGIN_TXT,
    LOADING_LOGIN,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = {
    loading: false,
    email: '',
    password: '',
    error: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_LOGIN_TXT :
            return { ...state, [action.payload.prop]: action.payload.value, error: '' }
        case LOADING_LOGIN :
            return { ...state, loading: true, error: '' }
        case USER_LOGIN_FAIL :
            return { ...state, loading: false, error: action.payload }
        case USER_LOGIN_SUCCESS :
            return INITIAL_STATE
        default :
            return state
    }
}