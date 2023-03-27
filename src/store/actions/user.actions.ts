import { SET_USER_IS_LOGGED_IN } from "store/actionTypes";

export const setUserIsLoggedIn = (bool: boolean) => ({
    type: SET_USER_IS_LOGGED_IN,
    payload: bool
})

export type UserAction = (
    { type: "SET_USER_IS_LOGGED_IN", payload: boolean }
)