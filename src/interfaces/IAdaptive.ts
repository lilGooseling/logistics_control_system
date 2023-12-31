export enum IAdaptiveSortEnum {
    ASC = 'ASC',
    DESC = 'DESC',
    NONE = 'NONE'
}

export interface IAdaptiveSortingState {
    adaptiveSorting: IAdaptiveSortingFields
}

export interface IAdaptiveSortingFields {
    [key:string]: IAdaptiveSortEnum
}

export const adaptiveSortingInitialState:IAdaptiveSortingState = {
    adaptiveSorting: {}
}


export interface IAdaptiveSearchState {
    adaptiveSearch: string
}

export const adaptiveSearchInitialState:IAdaptiveSearchState = {
    adaptiveSearch: ''
}
