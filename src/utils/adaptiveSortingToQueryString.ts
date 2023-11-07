import {IAdaptiveSortEnum, IAdaptiveSortingFields} from "../interfaces/IAdaptive";

//form factor: sort[lastName]=ASC&sort[email]=ASC
export const adaptiveSortingToQueryString = (data: IAdaptiveSortingFields): string => {
    let queryString = '';
    const keys = Object.keys(data);
    if (keys.length) {
        keys.forEach((key)=>{
            if (data[key] !== IAdaptiveSortEnum.NONE){
                queryString+=`&sort[${key}]=${data[key]}`;
            }
        })
    }
    return queryString;
}