import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {baseLoadingAction, IMessage, initMessage} from "../interfaces/IApp";
import storage from "../utils/storage";
import {IUserServerResponse, IUserStore} from "../interfaces/IUser";


const initialState: IUserStore = {
    loading: false,
    count: 0,
    limit: 20,
    offset: 0,
    query: '',
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLoading: (state,{payload}: PayloadAction<boolean>) => {
          return {
              ...state,
              loading: payload
          }
        },
        setAllUsers: (state, {payload}: PayloadAction<IUserServerResponse>) => {
            return {
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
        setQuery: (state, {payload}: PayloadAction<string>) =>{
            return {
                ...state,
                query: payload
            }
        }
    }
})

export const userReducer = userSlice.reducer;
export const {
    setAllUsers,
    clearAllUsers,
    setQuery,
    nextPage,
    setLoading,
} = userSlice.actions;