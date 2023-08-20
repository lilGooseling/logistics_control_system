import { createSlice, PayloadAction }   from '@reduxjs/toolkit';
import {AuthStateType, IAuth}                     from "../interfaces/IAuth";
import {baseLoadingAction, IMessage, initMessage} from "../interfaces/IApp";
import storage                                    from "../utils/storage";


const initialState: AuthStateType = {
    init: false,
    id: undefined,
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    role: undefined,
    hubIds: [],
    token: storage.getItem('token'),
    ...initMessage,
    loading: !!storage.getItem('token')
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setLoadingAction: baseLoadingAction,
        loginAction: (state, { payload }: PayloadAction<IAuth>) => {
            storage.setItem('token', payload.token);
            return {
                ...state,
                token: payload.token,
            }
        },
        initSessionAction: (state) => {
            return {
                ...state,
                init: true
            }
        },
        getCurrentUserAction: (state, { payload }: PayloadAction<IAuth>) => {
            return {
                ...state,
                ...payload,
                init: true
            }
        },
        logoutAction: (state) => {
            storage.setItem('token', undefined);
            return {
                ...state,
                ...initialState,
                token: undefined,
                init: true,
                loading: false
            }
        },
        authMessageAction: (state, { payload }: PayloadAction<IMessage>) => {
            return {
                ...state,
                loading: false,
                message: payload.message
            }
        },
    }
})

export const authReducer = authSlice.reducer;
export const {
    setLoadingAction,
    initSessionAction,
    logoutAction,
    loginAction,
    getCurrentUserAction,
    authMessageAction
} = authSlice.actions;