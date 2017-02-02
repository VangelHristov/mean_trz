define('app',['exports', './routes'], function (exports, _routes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var AuthorizeStep = function () {
        function AuthorizeStep() {
            _classCallCheck(this, AuthorizeStep);
        }

        AuthorizeStep.prototype.run = function run(navigationInstruction, next) {

            if (navigationInstruction.getAllInstructions().some(function (i) {
                return i.config.settings.auth;
            })) {

                var token = window.localStorage.getItem('token');

                if (!token || token === 'null') {
                    return next.cancel();
                }
            }

            return next();
        };

        return AuthorizeStep;
    }();

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);

            this.primaryColor = '#72538f';
            this.accentColor = '#8F5A5A';
            this.errorColor = '#f44336';
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            config.title = 'ТРЗ';
            config.addAuthorizeStep(new AuthorizeStep());
            config.map(_routes.routes);
            config.fallbackRoute(_routes.fallback);
            this.router = router;
        };

        return App;
    }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    var _environment2 = _interopRequireDefault(_environment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });

    function configure(aurelia) {
        aurelia.use.standardConfiguration().feature('resources');

        if (_environment2.default.debug) {
            aurelia.use.developmentLogging();
        }

        if (_environment2.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }

        aurelia.use.plugin('aurelia-materialize-bridge', function (b) {
            return b.useAll().useDropdownFix();
        });
        aurelia.start().then(function () {
            return aurelia.setRoot();
        });
    }
});
define('routes',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var routes = exports.routes = [{
        name: 'about',
        route: ['', 'about'],
        moduleId: 'about/about',
        title: 'ТРЗ'
    }, {
        name: 'login',
        route: 'login',
        moduleId: 'authentication/login',
        title: 'Вход'
    }, {
        name: 'register',
        route: 'register',
        moduleId: 'authentication/register',
        title: 'Регистрация'
    }, {
        name: 'help',
        route: 'help',
        moduleId: 'help/help',
        title: 'Помощ'
    }, {
        name: 'companies',
        route: 'companies',
        moduleId: 'companies/list-all',
        title: 'Фирми',
        settings: { auth: true }
    }, {
        name: 'companies/add-new',
        route: 'companies/add-new',
        moduleId: 'companies/add-new',
        title: 'Добави фирма',
        settings: { auth: true }
    }, {
        name: 'companies/details',
        route: 'companies/:id',
        moduleId: 'companies/details',
        title: 'Фирма Х',
        settings: { auth: true }
    }, {
        name: 'dossiers',
        route: 'dossiers',
        moduleId: 'dossiers/list-all',
        title: 'Досиета',
        settings: { auth: true }
    }, {
        name: 'dossiers/add-new',
        route: 'dossiers/add-new',
        moduleId: 'dossiers/add-new',
        title: 'Добави досие',
        settings: { auth: true }
    }, {
        name: 'dossiers/list-all',
        route: 'dossiers/list-all',
        moduleId: 'dossiers/list-all',
        title: 'Досиета',
        settings: { auth: true }
    }, {
        name: 'dossier-details',
        route: 'dossiers/:id',
        moduleId: 'dossiers/details',
        title: 'Досие Х',
        settings: { auth: true }
    }, {
        name: 'exports/declaration-1',
        route: 'exports/declaration-1',
        moduleId: 'file-exports/declaration-1',
        title: 'Декларация образец 1',
        settings: { auth: true }
    }, {
        name: 'exports/declaration-6',
        route: 'exports/declaration-6',
        moduleId: 'file-exports/declaration-6',
        title: 'Декларация образец 6',
        settings: { auth: true }
    }, {
        name: 'exports/notice-62',
        route: 'exports/notice-62',
        moduleId: 'file-exports/notice-62',
        title: 'Уведомление по чл. 62',
        settings: { auth: true }
    }, {
        name: 'exports/noi-file',
        route: 'exports/noi-file',
        moduleId: 'file-exports/noi-file',
        title: 'Файл за НОИ',
        settings: { auth: true }
    }];

    var fallback = exports.fallback = 'about';
});
define('about/about',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var About = exports.About = function About() {
        _classCallCheck(this, About);

        this.message = 'ABOUT';
    };
});
define('authentication/login',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Login = exports.Login = function Login() {
        _classCallCheck(this, Login);

        this.message = 'LOGIN';
    };
});
define('authentication/register',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Register = exports.Register = function Register() {
        _classCallCheck(this, Register);

        this.message = 'Register';
    };
});
define('companies/add-new',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var AddNew = exports.AddNew = function AddNew() {
        _classCallCheck(this, AddNew);

        this.message = 'ADD NEW';
    };
});
define('companies/details',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Details = exports.Details = function Details() {
        _classCallCheck(this, Details);

        this.message = 'DETAILS';
    };
});
define('companies/list-all',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ListAll = exports.ListAll = function ListAll() {
        _classCallCheck(this, ListAll);

        this.message = 'LIST ALL';
    };
});
define('dossiers/add-new',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var AddNew = exports.AddNew = function AddNew() {
        _classCallCheck(this, AddNew);

        this.message = 'ADD NEW DOSSIER';
    };
});
define('dossiers/details',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Details = exports.Details = function Details() {
        _classCallCheck(this, Details);

        this.message = 'DETAILS DOSSIER';
    };
});
define('dossiers/list-all',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ListAll = exports.ListAll = function ListAll() {
        _classCallCheck(this, ListAll);

        this.message = 'LIST ALL DOSSIERS';
    };
});
define('file-exports/declaration-1',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Declaration1 = exports.Declaration1 = function Declaration1() {
        _classCallCheck(this, Declaration1);

        this.message = 'DECLARATION 1';
    };
});
define('file-exports/declaration-6',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Declaration6 = exports.Declaration6 = function Declaration6() {
        _classCallCheck(this, Declaration6);

        this.message = 'DECLARATION 6';
    };
});
define('file-exports/noi-file',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var NoiFile = exports.NoiFile = function NoiFile() {
        _classCallCheck(this, NoiFile);

        this.message = 'NOI FILE';
    };
});
define('file-exports/notice-62',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Notice62 = exports.Notice62 = function Notice62() {
        _classCallCheck(this, Notice62);

        this.message = 'Notice 62';
    };
});
define('help/help',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Help = exports.Help = function Help() {
        _classCallCheck(this, Help);

        this.message = 'HELP';
    };
});
define('layout/breadcrumbs',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Breadcrumbs = exports.Breadcrumbs = function () {
        function Breadcrumbs() {
            _classCallCheck(this, Breadcrumbs);

            this.registry = {
                "title": "Breadcrumbs",
                "samples": {
                    "basic-use": {
                        "route": "about",
                        "files": ["html", "md"]
                    },
                    "second-target": {
                        "route": "login",
                        "files": ["html"]
                    }
                }
            };
        }

        Breadcrumbs.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            return this.registry.load(config, 'breadcrumbs');
        };

        return Breadcrumbs;
    }();
});
define('layout/nav-bar',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NavBar = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _desc, _value, _class, _descriptor;

    var NavBar = exports.NavBar = (_class = function NavBar() {
        _classCallCheck(this, NavBar);

        _initDefineProp(this, 'router', _descriptor, this);
    }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'router', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    })), _class);
});
define('layout/side-menu',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SideMenu = exports.SideMenu = function SideMenu() {
    _classCallCheck(this, SideMenu);
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/services/authenticator',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Authenticator = exports.Authenticator = function () {
        function Authenticator() {
            _classCallCheck(this, Authenticator);
        }

        Authenticator.prototype.isLoggedIn = function isLoggedIn() {
            return window.localStorage.getItem('token') !== 'null';
        };

        Authenticator.prototype.logIn = function logIn(token) {
            window.localStorage.setItem('token', JSON.stringify(token));
        };

        Authenticator.prototype.logOut = function logOut() {
            window.localStorage.removeItem('token');
        };

        Authenticator.prototype.getToken = function getToken() {
            return window.localStorage.getItem('token');
        };

        return Authenticator;
    }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><md-colors md-primary-color.bind=primaryColor md-accent-color.bind=accentColor md-error-color.bind=errorColor></md-colors><app-colors primary-color.bind=primaryColor accent-color.bind=accentColor></app-colors><require from=./layout/nav-bar.html></require><require from=./layout/side-menu.html></require><loading-indicator></loading-indicator><header><nav-bar router.bind=router></nav-bar></header><side-menu router.bind=router></side-menu><div class=page-host><router-view></router-view></div><footer></footer></template>"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!authentication/login.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!authentication/register.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!companies/add-new.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!companies/details.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!companies/list-all.html', ['module'], function(module) { module.exports = "<template><require from=../layout/breadcrumbs.html></require><breadcrumbs></breadcrumbs></template>"; });
define('text!dossiers/add-new.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!dossiers/details.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!dossiers/list-all.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!file-exports/declaration-1.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!file-exports/declaration-6.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!file-exports/noi-file.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!file-exports/notice-62.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!help/help.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!layout/breadcrumbs.html', ['module'], function(module) { module.exports = "<template><md-breadcrumbs></md-breadcrumbs></template>"; });
define('text!layout/nav-bar.html', ['module'], function(module) { module.exports = "<template><md-navbar><a route-href=\"route: about\" class=\"hide-on-small-and-down left brand-logo\"><span>ТРЗ</span></a><ul class=right><li md-waves><a route-href=\"route: register\">Регистрация</a></li><li md-waves><a route-href=\"route: login\">Вход</a></li><li md-waves><a click.trigger=\"window.alert('Logout clicked')\">Изход</a></li></ul></md-navbar></template>"; });
define('text!layout/side-menu.html', ['module'], function(module) { module.exports = "<template><div class=\"col m4\"><div md-pushpin=\"top: 320; offset: 150;\"><md-card md-title=Меню><div><div class=actions><a md-button md-dropdown=\"activates: companies; below-origin: true; constrain-width: false;in-duration: 1000;\">&nbsp; Фирми&nbsp;</a></div><div class=actions><a md-button md-dropdown=\"activates: export; below-origin: true; constrain-width: false;in-duration: 1000;\">Експорт</a></div><ul id=companies><li><a route-href=\"route: companies\">Покажи всички</a></li><li class=divider></li><li><a route-href=\"route: companies/add-new\">Запиши нова</a></li></ul><ul id=export><li><a route-href=\"route: exports/declaration-1\">Декларация образец 1</a></li><li class=divider></li><li><a route-href=\"route: exports/declaration-6\">Декларация образец 6</a></li><li class=divider></li><li><a route-href=\"route: exports/notice-62\">Уведомление по чл. 62</a></li><li class=divider></li><li><a route-href=\"route: exports/noi-file\">Файл за НОИ</a></li></ul></div></md-card></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map