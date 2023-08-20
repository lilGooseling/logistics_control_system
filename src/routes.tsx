import React                                  from 'react';
import { matchPath, Redirect, Route, Switch } from 'react-router-dom';
import {IRoute}                               from "./interfaces/IApp";
import {EPermission}                          from "./interfaces/IAuth";
import PermissionsRoute                       from "./containers/router/permissions-route";
import Login                                  from "./containers/login";
import Main                                   from "./containers/main/main";


export const AUTH = 'login';
export const MAIN = 'main';

export const routes: IRoute[] = [
    {
        id: AUTH,
        path: `/${AUTH}`,
        exact: true,
        permissions: [EPermission.NONE],
        children: <Login/>
    },
    {
        id: MAIN,
        path: '/',
        exact: true,
        permissions: [EPermission.NONE],
        children: <Main/>
    },
];

export const getRouteConfig = (id: string) => {
    const route = routes.find(r => r.id === id);
    if (route) {
        const { children, ...rest } = route;
        return rest;
    }
    return '';
}

export const getCurrentRoute = () => {
    const pathname = window.location.pathname;
    const currentRoute = routes.find(route => route.path === pathname);
    if (!!currentRoute) {
        const { children, ...rest } = currentRoute;
        return rest;
    }
    return null;
}

export const matchRoute = (id: string): boolean => {
    const currentRoute = getCurrentRoute();
    return currentRoute?.id === id;
}

const Routes = () => {
    return (
        <Switch>
            {routes.map(props => {
                return (<PermissionsRoute key={props.id} {...props} />);
            })}

            <Route path="*">
                <Redirect to="/"/>
            </Route>
        </Switch>
    )
}

export default Routes;

export interface IRoutesComparator {
    match: (id: string) => ReturnType<typeof matchPath>
}

