import {ILoading, IMessage} from "./IApp";


export interface IFCsUser {
    firstName?: string | undefined;
    lastName?: string | undefined;
    middleName?: string | undefined;
}

export interface IAuth extends IFCsUser {
    id?: number | undefined;
    init?: boolean;
    role?: string | undefined;
    hubIds?: number[];
    token?: string | undefined;
    permissions?: IPermission[];
}

export enum EPermission {
    ROLE_USER = 'ROLE_USER', // ?
    ROLE_SECTION_USER = 'ROLE_SECTION_USER', // Доступ к разделу “Пользователи”
    // ROLE_SECTION_COURIER_TYPE = 'ROLE_SECTION_COURIER_TYPE', // Доступ к разделу “Типы курьеров” (отсутствует/спрятан)
    // ROLE_SECTION_COURIER = 'ROLE_SECTION_COURIER', // Доступ к разделу “Курьеры”
    ROLE_SECTION_DELIVERY_TYPE = 'ROLE_SECTION_DELIVERY_TYPE', // Доступ к разделу “Типы доставки” (отсутствует/спрятан)
    ROLE_SECTION_ZONE_VIEW = 'ROLE_SECTION_ZONE_VIEW', // Доступ к разделу “Зоны доставки”
    ROLE_SECTION_SLA_VIEW = 'ROLE_SECTION_SLA_VIEW', // Доступ к разделу “Шаблоны интервалов”
    ROLE_SECTION_HUB_PICK_UP_POINT_VIEW = 'ROLE_SECTION_HUB_PICK_UP_POINT_VIEW', // хабы и склады, 2 раздела
    // ROLE_TRANSPORT_COMPANY_ACCESS = 'ROLE_TRANSPORT_COMPANY_ACCESS', // ТК рудимент до лучших времен
    ROLE_IGNORE_COURIER_TIME = 'ROLE_IGNORE_COURIER_TIME', //option не учитывать занятость
    ROLE_SECTION_AUTO_ROUTING_SETTING_VIEW = 'ROLE_SECTION_AUTO_ROUTING_SETTING_VIEW', // настройки
    // ROLE_SEARCH_ACCESS = 'ROLE_SEARCH_ACCESS', // поиск
    ROLE_TECH_SUPPORT = 'ROLE_TECH_SUPPORT', // технический раздел
    // ROLE_ACCESS_NOT_OWN_EXPORTED_ROUTES = 'ROLE_ACCESS_NOT_OWN_EXPORTED_ROUTES', // option просмотр чужих маршрутов ЕРП
    ROLE_CARTOGRAPHY = 'ROLE_CARTOGRAPHY', // роль картографа - того, кто может редактировать полигоны и связанное с ними
    NONE = 'NONE', // доступ на просмотр (для элемента, не для пользователя)
}

export type IPermission = EPermission;

export type FormError = {
    message: string;
    field: string;
};

export interface AuthStateType extends IAuth, ILoading, IMessage {
}
