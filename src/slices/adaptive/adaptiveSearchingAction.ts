import {PayloadAction} from "@reduxjs/toolkit";

interface withAdaptiveSearching{
    adaptiveSearch: string
    offset?: number
}

type WritableDraft<T> = T;

export const adaptiveSearchingAction = <T extends withAdaptiveSearching>(state: T, {payload}: PayloadAction<string>):void | T | WritableDraft<T> => {
    return state.offset ? {
        ...state,
        adaptiveSearch: payload,
        offset: 0,
    } : {
        ...state,
        adaptiveSearch: payload,
    }
}
