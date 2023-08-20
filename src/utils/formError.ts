import {FormError} from "../interfaces/IAuth";

export type generatedFormError = {
    error: boolean,
    helperText: string,
}

export const formErrorMessage = (errors: FormError[]): string =>
    errors.reduce((message, item) => message += `${item.message} \n`, '');

export const generateFormError = (name: string, errors: FormError[] | undefined): generatedFormError => {
    let hasError = false;
    let errorText = '';
    if (errors && Array.isArray(errors)) {
        errors.map((error) => {
            if (error.field === name) {
                hasError = true;
                errorText = error.message;
            }

            return {
                error: false,
                helperText: ''
            };
        })
    }

    if (hasError) {
        return {
            helperText: errorText,
            error: true
        }
    }

    return {
        error: false,
        helperText: ''
    };
}

export interface iErrorResponse {
    data?: {
        detail?: string,
        message?: string,
    }
    status: string | number
}

export const autoRouteErrorGenerator = async (error: iErrorResponse): Promise<string> => {
    if (error) {
        if (!!error.data && !!error.data.message) return error.data.message;
        if (!!error.data && !!error.data.detail) return error.data.detail;
        if (!!error.data && Array.isArray(error.data)) {
            return formErrorMessage(error.data);
        }
    }

    const connectionError = await fetch('https://www.yandex.ru/', {
        mode: 'no-cors',
    })
        .then(() => {
            return false;
        }).catch(() => {
            return true;
        })

    return connectionError ? 'Отсутствует соединение с интернетом' : 'Неизвестная ошибка сервера';
}


export default generateFormError;
