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

export interface IUserStore{
    loading: boolean,
    count: number,
    limit: number,
    offset: number,
    query: string,
    users: IUser[],
}



