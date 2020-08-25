import { 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL 
} from "../Actions/types"

const INITIAL_STATE = {
    
}

export default(state=INITIAL_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS :
            return { ...action.payload, authChecked: false }
        case USER_LOGIN_FAIL :
            return { authChecked: true }
        default :
            return state
    }
}