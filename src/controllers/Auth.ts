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



export const login = (email: string, password: string) => {
    return async function (dispatch: Dispatch<any>): Promise<FormError[] | undefined> {
        dispatch(setLoadingAction(true));

        const { token, errors, error } = await authService.login(email, password);

        if (error) {
            dispatch(authMessageAction(messageHandler('Произошла ошибка. Попробуйте еще раз.')));
            dispatch(initSessionAction());
        } else if (errors) {
            dispatch(setLoadingAction(false));
            dispatch(initSessionAction());
            return errors;
        } else {
            dispatch(loginAction({ token }));
            store.dispatch(getCurrentUser())
        }
    };
};

export const logout = () => {
    return async function (dispatch: Dispatch<any>) {
        dispatch(logoutAction());
    };
};

export const getCurrentUser = () => {
    return async function (dispatch: Dispatch<any>) {
        const userData = await authService.getCurrentUser();

        if (userData.error) {
            dispatch(authMessageAction(messageHandler('Произошла ошибка. Попробуйте еще раз.')));
            dispatch(initSessionAction());
        } else {
            dispatch(getCurrentUserAction(userData));
        }
    }
};

export const initSession = () => {
    return async function (dispatch: Dispatch<any>) {
        dispatch(initSessionAction());
    }
}
