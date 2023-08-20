import { PayloadAction } from '@reduxjs/toolkit';
import { RouteProps }    from 'react-router';
import {IPermission}     from "./IAuth";

export interface ILoading {
    loading: boolean
}

export const initLoading: ILoading = {
    loading: true
}

export enum MessageType {
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning'
}

export enum StatusType {
    PENDING = 'pending',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface IMessage {
    message: {
        text: string | null,
        type: MessageType | null
    }
}

export const initMessage: IMessage = {
    message: {
        text: null,
        type: null
    }
}

export const baseLoadingAction = <T>(state: T, { payload }: PayloadAction<boolean>) => {
    return {
        ...state,
        ...initMessage,
        loading: payload,
    }
}

export const baseMessageAction = <T>(state: T, { payload }: PayloadAction<IMessage>) => {
    return {
        ...state,
        message: payload.message,
        loading: false,
    }
}
export const defaultStartTimes = [
    '', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
]

export type IStartTime = typeof defaultStartTimes;


export type formError = {
    code?: number;
    field: string;
    message: string;
}

export interface IRoute extends RouteProps {
    id: string,
    permissions: IPermission[],
}

export interface IUniversalSorting {
    uniSorting: IUniversalSortingState
}


export interface IUniversalSearching {
    uniSearching: string
}

export const initUniversalSorting = {
    uniSorting: {}
}

export const initUniversalSearching = {
    uniSearching: ''
}

export interface IUniversalSortingState {
    [key: string]: universalSortingType
}

export interface IUniversalPaginationState {
    version: number,
    count: number,
    limit: number,
    offset: number,
    query: string,
}

export enum universalSortingType {
    NONE = 'NONE',
    ASC = 'ASC',
    DESC = 'DESC'
}

export type repeatByDaysType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export type repeatByDaysTypeRu = 'пн' | 'вт' | 'ср' | 'чт' | 'пт' | 'сб' | 'вс';
