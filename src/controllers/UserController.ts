import { Dispatch }                                                                        from 'redux';
import {FormError}                                                                         from "../interfaces/IAuth";
import {
    authMessageAction,
    getCurrentUserAction,
    initSessionAction,
    loginAction,
    logoutAction,
    setLoadingAction
} from "../slices/auth";
import authService                                                                         from "../services/services/auth-service";
import {store}                                                                             from "../slices/store";
import {messageHandler}                                                                    from "../utils/messageHandler";
import userService from "../services/services/user-service";
import {setAllUsers} from "../slices/user";
import {adaptiveSortingToQueryString} from "../utils/adaptiveSortingToQueryString";



export const getAllUsersAction = () => {
    return async function (dispatch: Dispatch<any>) {
        dispatch(setLoadingAction(true));

        const {user: {limit, offset, adaptiveSearch, adaptiveSorting}} = store.getState();
        const res = await userService.getAllUsers(limit, offset, adaptiveSearch, adaptiveSortingToQueryString(adaptiveSorting));
        if (res.success && res.data) {
            dispatch(setAllUsers(res.data));
        }
    };
};
