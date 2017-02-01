define('app',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);

            this.primaryColor = '#72538f';
            this.accentColor = '#8F5A5A';
            this.errorColor = '#f44336';
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            config.title = 'Aurelia Materialize Components';

            config.map([{ name: 'about', route: ['', 'about'], moduleId: 'about/about', title: 'ТРЗ' }, { name: 'login', route: '/login', moduleId: 'authentication/login', title: 'Вход' }, { name: 'register', route: 'register', moduleId: 'authentication/register', title: 'Регистрация' }, { name: 'help', route: 'help', moduleId: 'help/help', title: 'Помощ' }, { name: 'companies-all', route: 'companies', moduleId: 'companies/list-all', title: 'Фирми' }, { name: 'company-new', route: 'companies/add-new', moduleId: 'companies/add-new', title: 'Добави фирма' }, { name: 'company-details', route: 'companies/:id', moduleId: 'companies/details', title: 'Фирма Х' }, { name: 'dossiers', route: 'dossiers', moduleId: 'dossiers/list-all', title: 'Досиета' }, { name: 'dossier-new', route: 'dossiers/add-new', moduleId: 'dossiers/add-new', title: 'Добави досие' }, { name: 'dossiers-all', route: 'dossiers/list-all', moduleId: 'dossiers/list-all', title: 'Досиета' }, { name: 'dossier-details', route: 'dossiers/:id', moduleId: 'dossiers/details', title: 'Досие Х' }, { name: 'declaration-1', route: 'exports/declaration-1', moduleId: 'exports/declaration-1', title: 'Декларация образец 1' }, { name: 'declaration-6', route: 'exports/declaration-6', moduleId: 'exports/declaration-6', title: 'Декларация образец 6' }, { name: 'notice-62', route: 'exports/notice-62', moduleId: 'exports/notice-62', title: 'Уведомление по чл. 62' }, { name: 'noi-file', route: 'exports/noi-file', moduleId: 'exports/noi-file', title: 'Файл за НОИ' }]);

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
define('authentication/ligin',['exports'], function (exports) {
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
define('file-export/declaration-1',['exports'], function (exports) {
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
define('file-export/declaration-6',['exports'], function (exports) {
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
define('file-export/notice-62',['exports'], function (exports) {
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
define('resources/noi-file',[], function () {
  "use strict";
});
define('file-export/noi-file',['exports'], function (exports) {
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><md-colors md-primary-color.bind=primaryColor md-accent-color.bind=accentColor md-error-color.bind=errorColor></md-colors><app-colors primary-color.bind=primaryColor accent-color.bind=accentColor></app-colors><require from=./layout/nav-bar.html></require><require from=./layout/side-menu.html></require><loading-indicator></loading-indicator><header><nav-bar router.bind=router></nav-bar></header><side-menu></side-menu><div class=page-host><router-view></router-view></div><footer></footer></template>"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!authentication/login.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!authentication/register.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!companies/add-new.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!companies/details.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!companies/list-all.html', ['module'], function(module) { module.exports = "<template><require from=../layout/breadcrumbs.html></require><breadcrumbs></breadcrumbs></template>"; });
define('text!dossiers/add-new.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!dossiers/details.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!dossiers/list-all.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!help/help.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!layout/nav-bar.html', ['module'], function(module) { module.exports = "<template><md-navbar><a href=#/samples/navbar class=\"hide-on-small-and-down left brand-logo\"><span>ТРЗ</span></a><ul class=right><li md-waves><a href=register>Регистрация</a></li><li md-waves><a href=login>Вход</a></li><li md-waves><a href=logout>Изход</a></li></ul></md-navbar></template>"; });
define('text!layout/side-menu.html', ['module'], function(module) { module.exports = "<template><div class=\"col m4\"><div md-pushpin=\"top: 320; offset: 150;\"><md-card md-title=Меню><div><div class=actions><a md-button md-dropdown=\"activates: companies; below-origin: true; constrain-width: false;in-duration: 1000;\">&nbsp; Фирми&nbsp;</a></div><div class=actions><a md-button md-dropdown=\"activates: export; below-origin: true; constrain-width: false;in-duration: 1000;\">Експорт</a></div><ul id=companies><li><a href=companies>Покажи всички</a></li><li class=divider></li><li><a href=companies/add-new>Запиши нова</a></li></ul><ul id=export><li><a href=exports/declaration-1>Декларация образец 1</a></li><li class=divider></li><li><a href=exports/declaration-6>Декларация образец 6</a></li><li class=divider></li><li><a href=exports/notice-62>Уведомление по чл. 62</a></li><li class=divider></li><li><a href=exports/noi-file>Файл за НОИ</a></li></ul></div></md-card></div></div></template>"; });
define('text!layout/breadcrumbs.html', ['module'], function(module) { module.exports = "<template><md-breadcrumbs></md-breadcrumbs></template>"; });
define('text!file-export/d1.html', ['module'], function(module) { module.exports = "<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>$Title$</title></head><body>$END$</body></html>"; });
define('text!file-export/declaration-1.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!file-export/declaration-6.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!file-export/notice-62.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
define('text!file-export/noi-file.html', ['module'], function(module) { module.exports = "<template>${message}</template>"; });
//# sourceMappingURL=app-bundle.js.map