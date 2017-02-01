export class App {
    constructor() {
        this.primaryColor = '#72538f';
        this.accentColor  = '#8F5A5A';
        this.errorColor   = '#f44336';

    }

    configureRouter(config, router) {
        config.title = 'Aurelia Materialize Components';

        config.map([
            {name: 'about', route: ['', 'about'], moduleId: 'about/about', title: 'ТРЗ'},
            {name: 'login', route: '/login', moduleId: 'authentication/login', title: 'Вход'},
            {name: 'register', route: 'register', moduleId: 'authentication/register', title: 'Регистрация'},
            {name: 'help', route: 'help', moduleId: 'help/help', title: 'Помощ'},
            {name: 'companies-all', route: 'companies', moduleId: 'companies/list-all', title: 'Фирми'},
            {name: 'company-new', route: 'companies/add-new', moduleId: 'companies/add-new', title: 'Добави фирма'},
            {name:'company-details', route:'companies/:id', moduleId:'companies/details', title:'Фирма Х'},
            {name:'dossiers', route:'dossiers', moduleId:'dossiers/list-all', title:'Досиета'},
            {name:'dossier-new', route:'dossiers/add-new', moduleId:'dossiers/add-new', title:'Добави досие'},
            {name:'dossiers-all', route:'dossiers/list-all', moduleId:'dossiers/list-all', title:'Досиета'},
            {name:'dossier-details', route:'dossiers/:id', moduleId:'dossiers/details', title:'Досие Х'},
            {name:'declaration-1', route:'exports/declaration-1', moduleId:'exports/declaration-1', title:'Декларация образец 1'},
            {name:'declaration-6', route:'exports/declaration-6', moduleId:'exports/declaration-6', title:'Декларация образец 6'},
            {name:'notice-62', route:'exports/notice-62', moduleId:'exports/notice-62', title:'Уведомление по чл. 62'},
            {name:'noi-file', route:'exports/noi-file', moduleId:'exports/noi-file', title:'Файл за НОИ'}
        ]);

        this.router = router;
    }
}