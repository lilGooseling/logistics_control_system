import {PayloadAction} from "@reduxjs/toolkit";
import {IAdaptiveSortEnum, IAdaptiveSortingFields} from "../../interfaces/IAdaptive";

interface withAdaptiveSorting{
    adaptiveSorting: IAdaptiveSortingFields,
    offset?: number
}

type WritableDraft<T> = T;

export const adaptiveSortingAction = <T extends withAdaptiveSorting>(state: T, {payload}: PayloadAction<string>):void | T | WritableDraft<T> => {
    const nextValue = nextSortType(payload, state.adaptiveSorting[payload]);

    // @ts-ignore
    return typeof state.offset === "number" ? {
        ...state,
        adaptiveSorting: {
            ...state.adaptiveSorting,
            [payload]: nextValue,
        },
        offset: 0
    } : {
        ...state,
        adaptiveSorting: {
            ...state.adaptiveSorting,
            [payload]: nextValue,
        },
    }
}

const nextSortType = (key: string, state: IAdaptiveSortEnum | undefined) =>{
    switch (state) {
        case  IAdaptiveSortEnum.ASC:
            return IAdaptiveSortEnum.DESC
        case IAdaptiveSortEnum.DESC:
            return  IAdaptiveSortEnum.NONE
        case IAdaptiveSortEnum.NONE:
            return IAdaptiveSortEnum.ASC
        default:
            return IAdaptiveSortEnum.ASC
    }
}