import axios   from 'axios';
import {
    getAuthorizationHeaderSetterInterceptor,
    getTokenInvalidInterceptor,
    getConnectionErrorInterceptor
}              from './interceptor';
import {store} from "../slices/store";
import config  from "../config";

const httpClient = axios.create({
    baseURL: config.host,
});

const authorizationHeaderSetterInterceptor = getAuthorizationHeaderSetterInterceptor(() => {
    const token = localStorage.getItem('token');
    return token ? token : '';
});


httpClient.interceptors.request.use(authorizationHeaderSetterInterceptor);
httpClient.interceptors.response.use(undefined, getTokenInvalidInterceptor);
httpClient.interceptors.response.use(undefined, getConnectionErrorInterceptor);

export default httpClient;