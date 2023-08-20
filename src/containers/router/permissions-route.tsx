import React, { useEffect }            from 'react';
import { useSelector }                 from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AUTH }                        from '../../routes';
import {IRoute}                        from "../../interfaces/IApp";
import {EPermission, IPermission}      from "../../interfaces/IAuth";
import {TStore}                        from "../../slices/store";
import Loader                          from "../../components/Loader";

interface IPermissionsRoute extends RouteProps, IRoute{
    permissions: IPermission[];
}

const PermissionsRoute = ({ children, permissions, id,  ...rest }: IPermissionsRoute) => {

    const { permissions: userPermissions, sessionInit, uId} = useSelector((state: TStore) => ({
        token: state.auth.token,
        uId: state.auth.id,
        permissions: state.auth.permissions,
        sessionInit: state.auth.init
    }));
    let hasPermissions = permissions.every(permission => {
        return userPermissions?.includes(permission);
    }) || false;
    if (permissions.includes(EPermission.NONE)) hasPermissions = true;
    let component;
    if (!sessionInit){
        component =  <Route {...rest} render={() => <Loader loading={true}/>}/>
    } else {
        if (!uId && id !== AUTH){
            component = <Redirect to='/login' />
        } else if (!!uId && id === AUTH){
            component = <Redirect to='/' />
        } else {
            // @ts-ignore
            component = <Route {...rest} render={() => hasPermissions  ? children :
                <Redirect to='/' />
            }/>
        }
    }

    useEffect(() => {
        if (!hasPermissions && sessionInit) {
            console.log('403. Не хватает прав для перехода в раздел. Обратитесь в службу технической поддержки')
        }
    }, [sessionInit]);

    return component
}

export default  PermissionsRoute;
