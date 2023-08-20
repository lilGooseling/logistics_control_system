import { AxiosError, AxiosRequestConfig } from 'axios';
import { logoutAction }                   from '../slices/auth';
import {store}                            from "../slices/store";


const isAuthRequest = (url = '') => {
    return url.indexOf('/auth') !== -1;
};

const getAuthorizationHeaderSetterInterceptor = (
    getToken: () => string
) => (config: AxiosRequestConfig) => {
    const accessToken = getToken();
    if (accessToken && !isAuthRequest(config.url)) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
};

const getTokenInvalidInterceptor = (error: AxiosError) => {
    if (error.response?.status === 401 || error.response?.data.message === 'Invalid JWT Token') {
        store.dispatch(logoutAction());
        if (window.location.pathname.length < 1) {
            window.location.href = '/';
        }
    }
    return Promise.reject(error);
}

const getConnectionErrorInterceptor = (error: AxiosError) => {
    const connectionError = fetch('https://www.yandex.ru/', {
        mode: 'no-cors',
    }).catch(() => {
       console.log('Отсутствует соединение с интернетом!');
    })
    return Promise.reject(error);
}

export {
    getAuthorizationHeaderSetterInterceptor,
    getTokenInvalidInterceptor,
    getConnectionErrorInterceptor
};
