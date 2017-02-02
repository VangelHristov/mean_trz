'use strict';

export const routes = [
    {
        name    : 'about',
        route   : ['', 'about'],
        moduleId: 'about/about',
        title   : 'ТРЗ'
    },
    {
        name    : 'login',
        route   : 'login',
        moduleId: 'authentication/login',
        title   : 'Вход'
    },
    {
        name    : 'register',
        route   : 'register',
        moduleId: 'authentication/register',
        title   : 'Регистрация'
    },
    {
        name    : 'help',
        route   : 'help',
        moduleId: 'help/help',
        title   : 'Помощ'
    },
    {
        name    : 'companies',
        route   : 'companies',
        moduleId: 'companies/list-all',
        title   : 'Фирми',
        settings: {auth: true}
    },
    {
        name    : 'companies/add-new',
        route   : 'companies/add-new',
        moduleId: 'companies/add-new',
        title   : 'Добави фирма',
        settings: {auth: true}
    },
    {
        name    : 'companies/details',
        route   : 'companies/:id',
        moduleId: 'companies/details',
        title   : 'Фирма Х',
        settings: {auth: true}
    },
    {
        name    : 'dossiers',
        route   : 'dossiers',
        moduleId: 'dossiers/list-all',
        title   : 'Досиета',
        settings: {auth: true}
    },
    {
        name    : 'dossiers/add-new',
        route   : 'dossiers/add-new',
        moduleId: 'dossiers/add-new',
        title   : 'Добави досие',
        settings: {auth: true}
    },
    {
        name    : 'dossiers/list-all',
        route   : 'dossiers/list-all',
        moduleId: 'dossiers/list-all',
        title   : 'Досиета',
        settings: {auth: true}
    },
    {
        name    : 'dossier-details',
        route   : 'dossiers/:id',
        moduleId: 'dossiers/details',
        title   : 'Досие Х',
        settings: {auth: true}
    },
    {
        name    : 'exports/declaration-1',
        route   : 'exports/declaration-1',
        moduleId: 'file-exports/declaration-1',
        title   : 'Декларация образец 1',
        settings: {auth: true}
    },
    {
        name    : 'exports/declaration-6',
        route   : 'exports/declaration-6',
        moduleId: 'file-exports/declaration-6',
        title   : 'Декларация образец 6',
        settings: {auth: true}
    },
    {
        name    : 'exports/notice-62',
        route   : 'exports/notice-62',
        moduleId: 'file-exports/notice-62',
        title   : 'Уведомление по чл. 62',
        settings: {auth: true}
    },
    {
        name    : 'exports/noi-file',
        route   : 'exports/noi-file',
        moduleId: 'file-exports/noi-file',
        title   : 'Файл за НОИ',
        settings: {auth: true}
    }
];

export const fallback = 'about';