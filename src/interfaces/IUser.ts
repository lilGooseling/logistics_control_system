import {IAdaptiveSearchState, IAdaptiveSortingState} from "./IAdaptive";

export interface IUserServerResponse {
    count: number,
    users: IUser[]
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    email: string,
    permissions: string[],
    hubIds: number[]
}

export interface IUserStore extends IAdaptiveSortingState, IAdaptiveSearchState{
    loading: boolean,
    count: number,
    limit: number,
    offset: number,
    users: IUser[],
}



