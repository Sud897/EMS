import { UserAction } from "store/actions";
import { SET_USER_IS_LOGGED_IN } from "store/actionTypes";

export type UserState = {
    isUserLoggedIn: boolean
}

const initialState: UserState = {
    isUserLoggedIn: false
}

const userReducer = (state: UserState=initialState,action: UserAction) => {
    switch (action.type) {
        case SET_USER_IS_LOGGED_IN:
            return {
                ...state,
                isUserLoggedIn: action.payload
            }
    
        default:
            return state;
    }
}

export default userReducer;