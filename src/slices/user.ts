import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {baseLoadingAction, IMessage, initMessage} from "../interfaces/IApp";
import storage from "../utils/storage";
import {IUserServerResponse, IUserStore} from "../interfaces/IUser";
import {adaptiveSearchInitialState, adaptiveSortingInitialState} from "../interfaces/IAdaptive";
import {adaptiveSortingAction} from "./adaptive/adaptiveSortingAction";
import {adaptiveSearchingAction} from "./adaptive/adaptiveSearchingAction";


const initialState: IUserStore = {
    loading: false,
    count: 0,
    limit: 20,
    offset: 0,
    users: [],
    ...adaptiveSortingInitialState,
    ...adaptiveSearchInitialState
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserSorting: adaptiveSortingAction,
        setUserSearching: adaptiveSearchingAction,
        setLoading: (state,{payload}: PayloadAction<boolean>) => {
          return {
              ...state,
              loading: payload
          }
        },
        setAllUsers: (state, {payload}: PayloadAction<IUserServerResponse>) => {
            return state.offset === 0 ? {
                ...state,
                count: payload.count,
                users: [
                    ...payload.users
                ],
                loading: false,
            } : {
                ...state,
                count: payload.count,
                users: [
                    ...state.users,
                    ...payload.users
                ],
                loading: false,
            }
        },
        clearAllUsers: (state) => {
            return {
                ...state,
                users: []
            }
        },
        nextPage: (state) =>{
            return {
                ...state,
                offset: state.offset + state.limit,
            }
        },
    }
})

export const userReducer = userSlice.reducer;
export const {
    setAllUsers,
    clearAllUsers,
    nextPage,
    setLoading,
    setUserSorting,
    setUserSearching
} = userSlice.actions;