define('app',['exports', './resources/services/authorize-step', './resources/services/user', 'aurelia-framework'], function (exports, _authorizeStep, _user, _aureliaFramework) {
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

    var _dec, _class;

    var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_user.User), _dec(_class = function () {
        function App(user) {
            _classCallCheck(this, App);

            this.primaryColor = '#72538f';
            this.accentColor = '#8F5A5A';
            this.errorColor = '#f44336';
            this.user = user;
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
            config.title = 'ТРЗ';
            config.addPipelineStep('authorize', _authorizeStep.AuthorizeStep);
            config.map([{ route: '', redirect: 'about' }, { name: 'about', route: 'about', moduleId: 'about/about', title: 'ТРЗ' }, { name: 'help', route: 'help', moduleId: 'help/help', title: 'Помощ' }]);
            config.mapUnknownRoutes('not-found/not-found');
            this.router = router;
        };

        return App;
    }()) || _class);
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
        aurelia.use.plugin('aurelia-fetch-client');
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
define('authentication/login',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Login = undefined;

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

    var Login = exports.Login = (_class = function Login() {
        _classCallCheck(this, Login);

        _initDefineProp(this, 'user', _descriptor, this);

        this.email = '';
        this.password = '';
    }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'user', [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    })), _class);
});
define('authentication/logout',[], function () {
  "use strict";
});
define('authentication/register',['exports', 'aurelia-framework', '../resources/services/data-users', 'aurelia-materialize-bridge', 'aurelia-router', '../resources/services/user'], function (exports, _aureliaFramework, _dataUsers, _aureliaMaterializeBridge, _aureliaRouter, _user) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Register = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Register = exports.Register = (_dec = (0, _aureliaFramework.inject)(_dataUsers.DataUsers, _user.User, _aureliaMaterializeBridge.MdToastService), _dec(_class = function () {
        function Register(db, user, toast) {
            _classCallCheck(this, Register);

            this.email = '';
            this.password = '';
            this.passwordRepeat = '';
            this.db = db;
            this.user = user;
            this.toast = toast;
        }

        Register.prototype.register = function register() {
            var _this = this;

            this.db.create(this.email, this.password).then(function (res) {
                return _this.toast.show(res.message, 5000);
            }).catch(function (err) {
                return _this.toast.show(err, 6000);
            });
        };

        return Register;
    }()) || _class);
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
define('navigation/breadcrumbs',["exports"], function (exports) {
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
define('navigation/nav-bar',['exports', 'aurelia-framework', '../resources/services/user'], function (exports, _aureliaFramework, _user) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.NavBar = undefined;

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var _dec, _class;

   var NavBar = exports.NavBar = (_dec = (0, _aureliaFramework.inject)(_user.User), _dec(_class = function NavBar(user) {
      _classCallCheck(this, NavBar);

      this.user = user;
   }) || _class);
});
define('navigation/side-menu',["exports"], function (exports) {
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
define('not-found/not-found',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NotFound = exports.NotFound = function NotFound() {
    _classCallCheck(this, NotFound);
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
define('resources/services/authorize-step',['exports', './user', 'aurelia-framework'], function (exports, _user, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.AuthorizeStep = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var AuthorizeStep = exports.AuthorizeStep = (_dec = (0, _aureliaFramework.inject)(_user.User), _dec(_class = function () {
        function AuthorizeStep(user) {
            _classCallCheck(this, AuthorizeStep);

            this.user = user;
        }

        AuthorizeStep.prototype.run = function run(navigationInstruction, next) {

            if (navigationInstruction.getAllInstructions().some(function (i) {
                return i.config.settings.auth;
            })) {

                if (!this.user.isLoggedIn) {
                    return next.cancel();
                }
            }

            return next();
        };

        return AuthorizeStep;
    }()) || _class);
});
define('resources/services/data-users',['exports', 'aurelia-fetch-client', 'aurelia-framework'], function (exports, _aureliaFetchClient, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DataUsers = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var DataUsers = exports.DataUsers = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.NewInstance.of(_aureliaFetchClient.HttpClient)), _dec(_class = function () {
        function DataUsers(xhr) {
            _classCallCheck(this, DataUsers);

            this.xhr = xhr.configure(function (config) {
                return config.withBaseUrl('api/');
            });
        }

        DataUsers.prototype.create = function create(email, password) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                _this.xhr.fetch('users', {
                    method: 'POST',
                    body: (0, _aureliaFetchClient.json)({ email: email, password: password })
                }).then(function (result) {
                    return resolve(result);
                }).catch(function (err) {
                    return reject(err);
                });
            });
        };

        return DataUsers;
    }()) || _class);
});
define('resources/services/user',['exports', 'aurelia-router', 'aurelia-framework', 'aurelia-materialize-bridge'], function (exports, _aureliaRouter, _aureliaFramework, _aureliaMaterializeBridge) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.User = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var _dec, _class;

    var User = exports.User = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _aureliaMaterializeBridge.MdToastService), _dec(_class = function () {
        function User(router, toast) {
            _classCallCheck(this, User);

            this.theRouter = router;
            this.toast = toast;
            this._token = localStorage.getItem('token');
            this._isLoggedIn = this._token && this._token !== 'null';
        }

        User.prototype.logIn = function logIn(token) {
            if (token && token !== 'null') {
                this._token = token;
                window.localStorage.setItem('token', JSON.stringify(token));
                this._isLoggedIn = true;
            } else {
                this.toast.show('Missing token!!!', 5000);
            }
        };

        User.prototype.logOut = function logOut() {
            var _this = this;

            localStorage.removeItem('token');
            this._token = null;
            this._isLoggedIn = false;
            this.theRouter.navigateToRoute('about').then(function () {
                return _this.toast.show('Good bye', 4000);
            });
        };

        _createClass(User, [{
            key: 'isLoggedIn',
            get: function get() {
                return this._isLoggedIn;
            }
        }, {
            key: 'token',
            get: function get() {
                return this._token;
            }
        }]);

        return User;
    }()) || _class);
});
define('aurelia-materialize-bridge/exports',['exports', './autocomplete/autocomplete', './badge/badge', './box/box', './breadcrumbs/breadcrumbs', './breadcrumbs/instructionFilter', './button/button', './card/card', './carousel/carousel-item', './carousel/carousel', './char-counter/char-counter', './checkbox/checkbox', './chip/chip', './chip/chips', './collapsible/collapsible', './collection/collection-header', './collection/collection-item', './collection/collection', './collection/md-collection-selector', './colors/colorValueConverters', './colors/md-colors', './common/attributeManager', './common/attributes', './common/constants', './common/events', './datepicker/datepicker-default-parser', './datepicker/datepicker', './dropdown/dropdown-element', './dropdown/dropdown', './dropdown/dropdown-fix', './fab/fab', './file/file', './footer/footer', './input/input-prefix', './input/input-update-service', './input/input', './modal/modal', './modal/modal-trigger', './navbar/navbar', './pagination/pagination', './parallax/parallax', './progress/progress', './pushpin/pushpin', './radio/radio', './range/range', './scrollfire/scrollfire-patch', './scrollfire/scrollfire-target', './scrollfire/scrollfire', './scrollspy/scrollspy', './select/select', './sidenav/sidenav-collapse', './sidenav/sidenav', './slider/slider', './switch/switch', './tabs/tabs', './toast/toastService', './tooltip/tooltip', './transitions/fadein-image', './transitions/staggered-list', './validation/validationRenderer', './waves/waves'], function (exports, _autocomplete, _badge, _box, _breadcrumbs, _instructionFilter, _button, _card, _carouselItem, _carousel, _charCounter, _checkbox, _chip, _chips, _collapsible, _collectionHeader, _collectionItem, _collection, _mdCollectionSelector, _colorValueConverters, _mdColors, _attributeManager, _attributes, _constants, _events, _datepickerDefaultParser, _datepicker, _dropdownElement, _dropdown, _dropdownFix, _fab, _file, _footer, _inputPrefix, _inputUpdateService, _input, _modal, _modalTrigger, _navbar, _pagination, _parallax, _progress, _pushpin, _radio, _range, _scrollfirePatch, _scrollfireTarget, _scrollfire, _scrollspy, _select, _sidenavCollapse, _sidenav, _slider, _switch, _tabs, _toastService, _tooltip, _fadeinImage, _staggeredList, _validationRenderer, _waves) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_autocomplete).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _autocomplete[key];
      }
    });
  });
  Object.keys(_badge).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _badge[key];
      }
    });
  });
  Object.keys(_box).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _box[key];
      }
    });
  });
  Object.keys(_breadcrumbs).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _breadcrumbs[key];
      }
    });
  });
  Object.keys(_instructionFilter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _instructionFilter[key];
      }
    });
  });
  Object.keys(_button).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _button[key];
      }
    });
  });
  Object.keys(_card).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _card[key];
      }
    });
  });
  Object.keys(_carouselItem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _carouselItem[key];
      }
    });
  });
  Object.keys(_carousel).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _carousel[key];
      }
    });
  });
  Object.keys(_charCounter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _charCounter[key];
      }
    });
  });
  Object.keys(_checkbox).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _checkbox[key];
      }
    });
  });
  Object.keys(_chip).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chip[key];
      }
    });
  });
  Object.keys(_chips).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _chips[key];
      }
    });
  });
  Object.keys(_collapsible).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collapsible[key];
      }
    });
  });
  Object.keys(_collectionHeader).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collectionHeader[key];
      }
    });
  });
  Object.keys(_collectionItem).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collectionItem[key];
      }
    });
  });
  Object.keys(_collection).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _collection[key];
      }
    });
  });
  Object.keys(_mdCollectionSelector).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _mdCollectionSelector[key];
      }
    });
  });
  Object.keys(_colorValueConverters).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _colorValueConverters[key];
      }
    });
  });
  Object.keys(_mdColors).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _mdColors[key];
      }
    });
  });
  Object.keys(_attributeManager).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _attributeManager[key];
      }
    });
  });
  Object.keys(_attributes).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _attributes[key];
      }
    });
  });
  Object.keys(_constants).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _constants[key];
      }
    });
  });
  Object.keys(_events).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _events[key];
      }
    });
  });
  Object.keys(_datepickerDefaultParser).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _datepickerDefaultParser[key];
      }
    });
  });
  Object.keys(_datepicker).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _datepicker[key];
      }
    });
  });
  Object.keys(_dropdownElement).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _dropdownElement[key];
      }
    });
  });
  Object.keys(_dropdown).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _dropdown[key];
      }
    });
  });
  Object.keys(_dropdownFix).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _dropdownFix[key];
      }
    });
  });
  Object.keys(_fab).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _fab[key];
      }
    });
  });
  Object.keys(_file).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _file[key];
      }
    });
  });
  Object.keys(_footer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _footer[key];
      }
    });
  });
  Object.keys(_inputPrefix).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _inputPrefix[key];
      }
    });
  });
  Object.keys(_inputUpdateService).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _inputUpdateService[key];
      }
    });
  });
  Object.keys(_input).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _input[key];
      }
    });
  });
  Object.keys(_modal).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _modal[key];
      }
    });
  });
  Object.keys(_modalTrigger).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _modalTrigger[key];
      }
    });
  });
  Object.keys(_navbar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _navbar[key];
      }
    });
  });
  Object.keys(_pagination).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pagination[key];
      }
    });
  });
  Object.keys(_parallax).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _parallax[key];
      }
    });
  });
  Object.keys(_progress).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _progress[key];
      }
    });
  });
  Object.keys(_pushpin).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _pushpin[key];
      }
    });
  });
  Object.keys(_radio).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _radio[key];
      }
    });
  });
  Object.keys(_range).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _range[key];
      }
    });
  });
  Object.keys(_scrollfirePatch).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollfirePatch[key];
      }
    });
  });
  Object.keys(_scrollfireTarget).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollfireTarget[key];
      }
    });
  });
  Object.keys(_scrollfire).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollfire[key];
      }
    });
  });
  Object.keys(_scrollspy).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _scrollspy[key];
      }
    });
  });
  Object.keys(_select).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _select[key];
      }
    });
  });
  Object.keys(_sidenavCollapse).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _sidenavCollapse[key];
      }
    });
  });
  Object.keys(_sidenav).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _sidenav[key];
      }
    });
  });
  Object.keys(_slider).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _slider[key];
      }
    });
  });
  Object.keys(_switch).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _switch[key];
      }
    });
  });
  Object.keys(_tabs).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _tabs[key];
      }
    });
  });
  Object.keys(_toastService).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _toastService[key];
      }
    });
  });
  Object.keys(_tooltip).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _tooltip[key];
      }
    });
  });
  Object.keys(_fadeinImage).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _fadeinImage[key];
      }
    });
  });
  Object.keys(_staggeredList).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _staggeredList[key];
      }
    });
  });
  Object.keys(_validationRenderer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _validationRenderer[key];
      }
    });
  });
  Object.keys(_waves).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _waves[key];
      }
    });
  });
});
define('aurelia-materialize-bridge/autocomplete/autocomplete',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/events'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdAutoComplete = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdAutoComplete = exports.MdAutoComplete = (_dec = (0, _aureliaTemplating.customAttribute)('md-autocomplete'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdAutoComplete(element) {
      _classCallCheck(this, MdAutoComplete);

      this.input = null;

      _initDefineProp(this, 'values', _descriptor, this);

      this.element = element;
    }

    MdAutoComplete.prototype.attached = function attached() {
      if (this.element.tagName.toLowerCase() === 'input') {
        this.input = this.element;
      } else if (this.element.tagName.toLowerCase() === 'md-input') {
        this.input = this.element.au.controller.viewModel.input;
      } else {
        throw new Error('md-autocomplete must be attached to either an input or md-input element');
      }
      this.refresh();
    };

    MdAutoComplete.prototype.detached = function detached() {
      $(this.input).siblings('.autocomplete-content').off('click');
      $(this.input).siblings('.autocomplete-content').remove();
    };

    MdAutoComplete.prototype.refresh = function refresh() {
      var _this = this;

      this.detached();
      $(this.input).autocomplete({
        data: this.values
      });

      $(this.input).siblings('.autocomplete-content').on('click', function () {
        (0, _events.fireEvent)(_this.input, 'change');
      });
    };

    MdAutoComplete.prototype.valuesChanged = function valuesChanged(newValue) {
      this.refresh();
    };

    return MdAutoComplete;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'values', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/common/events',['exports', './constants'], function (exports, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fireEvent = fireEvent;
  exports.fireMaterializeEvent = fireMaterializeEvent;
  function fireEvent(element, name) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var event = new CustomEvent(name, {
      detail: data,
      bubbles: true
    });
    element.dispatchEvent(event);

    return event;
  }

  function fireMaterializeEvent(element, name) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return fireEvent(element, '' + _constants.constants.eventPrefix + name, data);
  }
});
define('aurelia-materialize-bridge/common/constants',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var constants = exports.constants = {
    eventPrefix: 'md-on-',
    bindablePrefix: 'md-'
  };
});
define('aurelia-materialize-bridge/badge/badge',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdBadge = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var MdBadge = exports.MdBadge = (_dec = (0, _aureliaTemplating.customAttribute)('md-badge'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdBadge(element) {
      _classCallCheck(this, MdBadge);

      _initDefineProp(this, 'isNew', _descriptor, this);

      _initDefineProp(this, 'caption', _descriptor2, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdBadge.prototype.attached = function attached() {
      var classes = ['badge'];

      if ((0, _attributes.getBooleanFromAttributeValue)(this.isNew)) {
        classes.push('new');
      }

      if (this.caption !== null) {
        this.attributeManager.addAttributes({ 'data-badge-caption': this.caption });
      }

      this.attributeManager.addClasses(classes);
    };

    MdBadge.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['badge', 'new']);
      this.attributeManager.removeAttributes(['data-badge-caption']);
    };

    MdBadge.prototype.newChanged = function newChanged(newValue) {
      if ((0, _attributes.getBooleanFromAttributeValue)(newValue)) {
        this.attributeManager.addClasses('new');
      } else {
        this.attributeManager.removeClasses('new');
      }
    };

    MdBadge.prototype.captionChanged = function captionChanged(newValue) {
      if (newValue !== null) {
        this.attributeManager.addAttributes({ 'data-badge-caption': newValue });
      } else {
        this.attributeManager.removeAttributes(['data-badge-caption']);
      }
    };

    return MdBadge;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'isNew', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'caption', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/common/attributeManager',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AttributeManager = exports.AttributeManager = function () {
    function AttributeManager(element) {
      _classCallCheck(this, AttributeManager);

      this._colorClasses = ['accent', 'primary'];
      this.addedClasses = [];
      this.addedAttributes = {};

      this.element = element;
    }

    AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
      var _this = this;

      var keys = Object.keys(attrs);
      keys.forEach(function (k) {
        if (!_this.element.getAttribute(k)) {
          _this.addedAttributes[k] = attrs[k];
          _this.element.setAttribute(k, attrs[k]);
        } else if (_this.element.getAttribute(k) !== attrs[k]) {
          _this.element.setAttribute(k, attrs[k]);
        }
      });
    };

    AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
      var _this2 = this;

      if (typeof attrs === 'string') {
        attrs = [attrs];
      }
      attrs.forEach(function (a) {
        if (_this2.element.getAttribute(a) && !!_this2.addedAttributes[a]) {
          _this2.element.removeAttribute(a);
          _this2.addedAttributes[a] = null;
          delete _this2.addedAttributes[a];
        }
      });
    };

    AttributeManager.prototype.addClasses = function addClasses(classes) {
      var _this3 = this;

      if (typeof classes === 'string') {
        classes = [classes];
      }
      classes.forEach(function (c) {
        var classListHasColor = _this3._colorClasses.filter(function (cc) {
          return _this3.element.classList.contains(cc);
        }).length > 0;
        if (_this3._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
          if (!_this3.element.classList.contains(c)) {
            _this3.addedClasses.push(c);
            _this3.element.classList.add(c);
          }
        }
      });
    };

    AttributeManager.prototype.removeClasses = function removeClasses(classes) {
      var _this4 = this;

      if (typeof classes === 'string') {
        classes = [classes];
      }
      classes.forEach(function (c) {
        if (_this4.element.classList.contains(c) && _this4.addedClasses.indexOf(c) > -1) {
          _this4.element.classList.remove(c);
          _this4.addedClasses.splice(_this4.addedClasses.indexOf(c), 1);
        }
      });
    };

    return AttributeManager;
  }();
});
define('aurelia-materialize-bridge/common/attributes',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
  function getBooleanFromAttributeValue(value) {
    return value === true || value === 'true';
  }
});
define('aurelia-materialize-bridge/box/box',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdBox = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdBox = exports.MdBox = (_dec = (0, _aureliaTemplating.customAttribute)('md-box'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdBox(element) {
      _classCallCheck(this, MdBox);

      _initDefineProp(this, 'caption', _descriptor, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdBox.prototype.attached = function attached() {
      this.attributeManager.addClasses('materialboxed');
      if (this.caption) {
        this.attributeManager.addAttributes({ 'data-caption': this.caption });
      }

      $(this.element).materialbox();
    };

    MdBox.prototype.detached = function detached() {
      this.attributeManager.removeAttributes('data-caption');
      this.attributeManager.removeClasses('materialboxed');
    };

    return MdBox;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'caption', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/breadcrumbs/breadcrumbs',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdBreadcrumbs = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdBreadcrumbs = exports.MdBreadcrumbs = (_dec = (0, _aureliaTemplating.customElement)('md-breadcrumbs'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaRouter.Router), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdBreadcrumbs(element, router) {
      _classCallCheck(this, MdBreadcrumbs);

      _initDefineProp(this, 'router', _descriptor, this);

      this.element = element;
      this.aureliaRouter = router;
    }

    MdBreadcrumbs.prototype.bind = function bind() {
      if (!this.router) {
        this.router = this.aureliaRouter;
      }
      var router = this.router;
      this._childRouter = router;
      while (router.parent) {
        router = router.parent;
      }
      this.router = router;
    };

    MdBreadcrumbs.prototype.routerChanged = function routerChanged() {};

    MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
      this._childRouter.navigateToRoute(navigationInstruction.config.name);
    };

    return MdBreadcrumbs;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'router', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/breadcrumbs/instructionFilter',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var InstructionFilterValueConverter = exports.InstructionFilterValueConverter = function () {
    function InstructionFilterValueConverter() {
      _classCallCheck(this, InstructionFilterValueConverter);
    }

    InstructionFilterValueConverter.prototype.toView = function toView(navigationInstructions) {
      return navigationInstructions.filter(function (i) {
        var result = false;
        if (i.config.title) {
          result = true;
        }
        return result;
      });
    };

    return InstructionFilterValueConverter;
  }();
});
define('aurelia-materialize-bridge/button/button',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdButton = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var MdButton = exports.MdButton = (_dec = (0, _aureliaTemplating.customAttribute)('md-button'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdButton(element) {
      _classCallCheck(this, MdButton);

      _initDefineProp(this, 'disabled', _descriptor, this);

      _initDefineProp(this, 'flat', _descriptor2, this);

      _initDefineProp(this, 'floating', _descriptor3, this);

      _initDefineProp(this, 'large', _descriptor4, this);

      this.attributeManager = new _attributeManager.AttributeManager(element);
    }

    MdButton.prototype.attached = function attached() {
      var classes = [];

      if ((0, _attributes.getBooleanFromAttributeValue)(this.flat)) {
        classes.push('btn-flat');
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.floating)) {
        classes.push('btn-floating');
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.large)) {
        classes.push('btn-large');
      }

      if (classes.length === 0) {
        classes.push('btn');
      }

      if ((0, _attributes.getBooleanFromAttributeValue)(this.disabled)) {
        classes.push('disabled');
      }

      if (!(0, _attributes.getBooleanFromAttributeValue)(this.flat)) {
        classes.push('accent');
      }
      this.attributeManager.addClasses(classes);
    };

    MdButton.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
    };

    MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
      if ((0, _attributes.getBooleanFromAttributeValue)(newValue)) {
        this.attributeManager.addClasses('disabled');
      } else {
        this.attributeManager.removeClasses('disabled');
      }
    };

    MdButton.prototype.flatChanged = function flatChanged(newValue) {
      if ((0, _attributes.getBooleanFromAttributeValue)(newValue)) {
        this.attributeManager.removeClasses(['btn', 'accent']);
        this.attributeManager.addClasses('btn-flat');
      } else {
        this.attributeManager.removeClasses('btn-flat');
        this.attributeManager.addClasses(['btn', 'accent']);
      }
    };

    return MdButton;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'flat', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'floating', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'large', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/card/card',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-binding', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaBinding, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCard = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var MdCard = exports.MdCard = (_dec = (0, _aureliaTemplating.customElement)('md-card'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec7 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdCard(element) {
      _classCallCheck(this, MdCard);

      _initDefineProp(this, 'mdHorizontal', _descriptor, this);

      _initDefineProp(this, 'mdImage', _descriptor2, this);

      _initDefineProp(this, 'mdReveal', _descriptor3, this);

      _initDefineProp(this, 'mdSize', _descriptor4, this);

      _initDefineProp(this, 'mdTitle', _descriptor5, this);

      this.element = element;
    }

    MdCard.prototype.attached = function attached() {
      this.mdHorizontal = (0, _attributes.getBooleanFromAttributeValue)(this.mdHorizontal);
      this.mdReveal = (0, _attributes.getBooleanFromAttributeValue)(this.mdReveal);
    };

    return MdCard;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdHorizontal', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdImage', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdReveal', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdSize', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdTitle', [_dec7], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/carousel/carousel-item',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCarouselItem = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var MdCarouselItem = exports.MdCarouselItem = (_dec = (0, _aureliaTemplating.customElement)('md-carousel-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdCarouselItem(element) {
      _classCallCheck(this, MdCarouselItem);

      _initDefineProp(this, 'mdHref', _descriptor, this);

      _initDefineProp(this, 'mdImage', _descriptor2, this);

      this.element = element;
    }

    MdCarouselItem.prototype.attached = function attached() {};

    return MdCarouselItem;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdHref', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdImage', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/carousel/carousel',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCarousel = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var MdCarousel = exports.MdCarousel = (_dec = (0, _aureliaTemplating.customElement)('md-carousel'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.children)('md-carousel-item'), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdCarousel(element, taskQueue) {
      _classCallCheck(this, MdCarousel);

      _initDefineProp(this, 'mdIndicators', _descriptor, this);

      _initDefineProp(this, 'mdSlider', _descriptor2, this);

      _initDefineProp(this, 'items', _descriptor3, this);

      this.element = element;
      this.taskQueue = taskQueue;
    }

    MdCarousel.prototype.attached = function attached() {
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdSlider)) {
        this.element.classList.add('carousel-slider');
      }

      this.refresh();
    };

    MdCarousel.prototype.itemsChanged = function itemsChanged(newValue) {
      this.refresh();
    };

    MdCarousel.prototype.refresh = function refresh() {
      var _this = this;

      if (this.items.length > 0) {
        (function () {
          var options = {
            full_width: (0, _attributes.getBooleanFromAttributeValue)(_this.mdSlider),
            fullWidth: (0, _attributes.getBooleanFromAttributeValue)(_this.mdSlider),
            indicators: _this.mdIndicators
          };

          _this.taskQueue.queueTask(function () {
            $(_this.element).carousel(options);
          });
        })();
      }
    };

    return MdCarousel;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdIndicators', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdSlider', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'items', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/char-counter/char-counter',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCharCounter = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdCharCounter = exports.MdCharCounter = (_dec = (0, _aureliaTemplating.customAttribute)('md-char-counter'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdCharCounter(element) {
      _classCallCheck(this, MdCharCounter);

      _initDefineProp(this, 'length', _descriptor, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdCharCounter.prototype.attached = function attached() {
      var _this = this;

      this.length = parseInt(this.length, 10);

      if (this.element.tagName.toUpperCase() === 'INPUT') {
        this.attributeManager.addAttributes({ 'length': this.length });
        $(this.element).characterCounter();
      } else {
        $(this.element).find('input').each(function (i, el) {
          $(el).attr('length', _this.length);
        });
        $(this.element).find('input').characterCounter();
      }
    };

    MdCharCounter.prototype.detached = function detached() {
      this.attributeManager.removeAttributes(['length']);
    };

    return MdCharCounter;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'length', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 120;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/checkbox/checkbox',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCheckbox = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _temp;

  var MdCheckbox = exports.MdCheckbox = (_dec = (0, _aureliaTemplating.customElement)('md-checkbox'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function MdCheckbox(element) {
      _classCallCheck(this, MdCheckbox);

      _initDefineProp(this, 'mdChecked', _descriptor, this);

      _initDefineProp(this, 'mdDisabled', _descriptor2, this);

      _initDefineProp(this, 'mdFilledIn', _descriptor3, this);

      _initDefineProp(this, 'mdMatcher', _descriptor4, this);

      _initDefineProp(this, 'mdModel', _descriptor5, this);

      this.element = element;
      this.controlId = 'md-checkbox-' + MdCheckbox.id++;
    }

    MdCheckbox.prototype.attached = function attached() {
      this.attributeManager = new _attributeManager.AttributeManager(this.checkbox);
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdFilledIn)) {
        this.attributeManager.addClasses('filled-in');
      }
      if (this.mdChecked === null) {
        this.checkbox.indeterminate = true;
      } else {
        this.checkbox.indeterminate = false;
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdDisabled)) {
        this.checkbox.disabled = true;
      }
    };

    MdCheckbox.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['filled-in', 'disabled']);
    };

    MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
      if (this.checkbox) {
        this.checkbox.disabled = !!newValue;
      }
    };

    return MdCheckbox;
  }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdChecked', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdFilledIn', [_dec5], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdMatcher', [_dec6], {
    enumerable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdModel', [_dec7], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/chip/chip',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdChip = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdChip = exports.MdChip = (_dec = (0, _aureliaTemplating.customElement)('md-chip'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdChip(element) {
      _classCallCheck(this, MdChip);

      _initDefineProp(this, 'mdClose', _descriptor, this);

      this.element = element;
    }

    MdChip.prototype.attached = function attached() {
      this.mdClose = (0, _attributes.getBooleanFromAttributeValue)(this.mdClose);
    };

    MdChip.prototype.close = function close() {
      this.element.parentElement.removeChild(this.element);
    };

    return MdChip;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdClose', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/chip/chips',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging', '../common/events'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaLogging, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdChips = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var MdChips = exports.MdChips = (_dec = (0, _aureliaTemplating.customAttribute)('md-chips'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdChips(element) {
      _classCallCheck(this, MdChips);

      _initDefineProp(this, 'autocompleteData', _descriptor, this);

      _initDefineProp(this, 'data', _descriptor2, this);

      _initDefineProp(this, 'placeholder', _descriptor3, this);

      _initDefineProp(this, 'secondaryPlaceholder', _descriptor4, this);

      this.element = element;
      this.log = (0, _aureliaLogging.getLogger)('md-chips');

      this.onChipAdd = this.onChipAdd.bind(this);
      this.onChipDelete = this.onChipDelete.bind(this);
      this.onChipSelect = this.onChipSelect.bind(this);
    }

    MdChips.prototype.attached = function attached() {
      var options = {
        autocompleteData: this.autocompleteData,
        data: this.data,
        placeholder: this.placeholder,
        secondaryPlaceholder: this.secondaryPlaceholder
      };
      $(this.element).material_chip(options);
      $(this.element).on('chip.add', this.onChipAdd);
      $(this.element).on('chip.delete', this.onChipDelete);
      $(this.element).on('chip.select', this.onChipSelect);
    };

    MdChips.prototype.detached = function detached() {};

    MdChips.prototype.onChipAdd = function onChipAdd(e, chip) {
      this.data = $(this.element).material_chip('data');
      (0, _events.fireEvent)(this.element, 'change', { operation: 'add', target: chip, data: this.data });
    };

    MdChips.prototype.onChipDelete = function onChipDelete(e, chip) {
      this.data = $(this.element).material_chip('data');
      (0, _events.fireEvent)(this.element, 'change', { operation: 'delete', target: chip, data: this.data });
    };

    MdChips.prototype.onChipSelect = function onChipSelect(e, chip) {
      (0, _events.fireEvent)(this.element, 'selected', { target: chip });
    };

    return MdChips;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'autocompleteData', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'data', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'secondaryPlaceholder', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/collapsible/collapsible',['exports', 'aurelia-event-aggregator', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (exports, _aureliaEventAggregator, _aureliaTemplating, _aureliaDependencyInjection, _attributes, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCollapsible = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

  var MdCollapsible = exports.MdCollapsible = (_dec = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec2 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec3 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec4 = (0, _aureliaTemplating.bindable)({ name: 'onOpen' }), _dec5 = (0, _aureliaTemplating.bindable)({ name: 'onClose' }), _dec6 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = function () {
    function MdCollapsible(element, eventAggregator) {
      _classCallCheck(this, MdCollapsible);

      this.element = element;
      this.eventAggregator = eventAggregator;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdCollapsible.prototype.attached = function attached() {
      this.attributeManager.addClasses('collapsible');
      if ((0, _attributes.getBooleanFromAttributeValue)(this.popout)) {
        this.attributeManager.addClasses('popout');
      }
      this.refresh();
    };

    MdCollapsible.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['collapsible', 'popout']);
      this.attributeManager.removeAttributes(['data-collapsible']);
    };

    MdCollapsible.prototype.refresh = function refresh() {
      var accordion = (0, _attributes.getBooleanFromAttributeValue)(this.accordion);
      var dataCollapsibleAttributeValue = accordion ? 'accordion' : 'expandable';

      this.attributeManager.addAttributes({ 'data-collapsible': dataCollapsibleAttributeValue });

      $(this.element).collapsible({
        accordion: accordion,
        onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
        onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
      });
    };

    MdCollapsible.prototype.accordionChanged = function accordionChanged() {
      this.refresh();
    };

    MdCollapsible.prototype.buildCollapsibleOpenCloseCallbackHandler = function buildCollapsibleOpenCloseCallbackHandler(handler) {
      return typeof handler === 'function' ? function (targetElementJquery) {
        var targetElement = targetElementJquery[0];

        handler(targetElement);
      } : null;
    };

    return MdCollapsible;
  }()) || _class) || _class) || _class) || _class) || _class) || _class);
});
define('aurelia-materialize-bridge/collection/collection-header',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCollectionHeader = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdCollectionHeader = exports.MdCollectionHeader = (_dec = (0, _aureliaTemplating.customElement)('md-collection-header'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function MdCollectionHeader(element) {
    _classCallCheck(this, MdCollectionHeader);

    this.element = element;
  }) || _class) || _class);
});
define('aurelia-materialize-bridge/collection/collection-item',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCollectionItem = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MdCollectionItem = exports.MdCollectionItem = (_dec = (0, _aureliaTemplating.customElement)('md-collection-item'), _dec(_class = function MdCollectionItem() {
    _classCallCheck(this, MdCollectionItem);
  }) || _class);
});
define('aurelia-materialize-bridge/collection/collection',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdCollection = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdCollection = exports.MdCollection = (_dec = (0, _aureliaTemplating.customElement)('md-collection'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdCollection(element) {
      _classCallCheck(this, MdCollection);

      this.element = element;
    }

    MdCollection.prototype.attached = function attached() {
      var header = this.element.querySelector('md-collection-header');
      if (header) {
        this.anchor.classList.add('with-header');
      }
    };

    MdCollection.prototype.getSelected = function getSelected() {
      var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
      return items.filter(function (i) {
        return i.au['md-collection-selector'].viewModel.isSelected;
      }).map(function (i) {
        return i.au['md-collection-selector'].viewModel.item;
      });
    };

    MdCollection.prototype.clearSelection = function clearSelection() {
      var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
      items.forEach(function (i) {
        return i.au['md-collection-selector'].viewModel.isSelected = false;
      });
    };

    MdCollection.prototype.selectAll = function selectAll() {
      var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
      items.forEach(function (i) {
        var vm = i.au['md-collection-selector'].viewModel;
        vm.isSelected = !vm.mdDisabled;
      });
    };

    return MdCollection;
  }()) || _class) || _class);
});
define('aurelia-materialize-bridge/collection/md-collection-selector',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-binding', '../common/events', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaBinding, _events, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdlListSelector = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var MdlListSelector = exports.MdlListSelector = (_dec = (0, _aureliaTemplating.customElement)('md-collection-selector'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaBinding.observable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdlListSelector(element) {
      _classCallCheck(this, MdlListSelector);

      _initDefineProp(this, 'item', _descriptor, this);

      _initDefineProp(this, 'mdDisabled', _descriptor2, this);

      _initDefineProp(this, 'isSelected', _descriptor3, this);

      this.element = element;
    }

    MdlListSelector.prototype.isSelectedChanged = function isSelectedChanged(newValue) {
      (0, _events.fireMaterializeEvent)(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
    };

    MdlListSelector.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
      this.mdDisabled = (0, _attributes.getBooleanFromAttributeValue)(newValue);
    };

    return MdlListSelector;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'item', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'isSelected', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/colors/colorValueConverters',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function shadeBlendConvert(p, from, to) {
        if (typeof p != "number" || p < -1 || p > 1 || typeof from != "string" || from[0] != 'r' && from[0] != '#' || typeof to != "string" && typeof to != "undefined") return null;
        var sbcRip = function sbcRip(d) {
            var l = d.length,
                RGB = new Object();
            if (l > 9) {
                d = d.split(",");
                if (d.length < 3 || d.length > 4) return null;
                RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
            } else {
                switch (l) {case 8:case 6:case 3:case 2:case 1:
                        return null;}
                if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : "");
                d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r((d >> 24 & 255) / 255 * 10000) / 10000 : -1;
            }
            return RGB;
        };
        var i = parseInt,
            r = Math.round,
            h = from.length > 9,
            h = typeof to == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
            b = p < 0,
            p = b ? p * -1 : p,
            to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
            f = sbcRip(from),
            t = sbcRip(to);
        if (!f || !t) return null;
        if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
    }

    var DarkenValueConverter = exports.DarkenValueConverter = function () {
        function DarkenValueConverter() {
            _classCallCheck(this, DarkenValueConverter);
        }

        DarkenValueConverter.prototype.toView = function toView(value, steps) {
            return shadeBlendConvert(-0.3 * parseFloat(steps, 10), value);
        };

        return DarkenValueConverter;
    }();

    var LightenValueConverter = exports.LightenValueConverter = function () {
        function LightenValueConverter() {
            _classCallCheck(this, LightenValueConverter);
        }

        LightenValueConverter.prototype.toView = function toView(value, steps) {
            return shadeBlendConvert(0.3 * parseFloat(steps, 10), value);
        };

        return LightenValueConverter;
    }();
});
define('aurelia-materialize-bridge/colors/md-colors',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdColors = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var MdColors = exports.MdColors = (_dec = (0, _aureliaTemplating.bindable)(), _dec2 = (0, _aureliaTemplating.bindable)(), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), (_class = function MdColors() {
    _classCallCheck(this, MdColors);

    _initDefineProp(this, 'mdPrimaryColor', _descriptor, this);

    _initDefineProp(this, 'mdAccentColor', _descriptor2, this);

    _initDefineProp(this, 'mdErrorColor', _descriptor3, this);

    _initDefineProp(this, 'mdSuccessColor', _descriptor4, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'mdPrimaryColor', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'mdAccentColor', [_dec2], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'mdErrorColor', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '#F44336';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'mdSuccessColor', [_dec4], {
    enumerable: true,
    initializer: null
  })), _class));
});
define('aurelia-materialize-bridge/datepicker/datepicker-default-parser',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DatePickerDefaultParser = exports.DatePickerDefaultParser = function () {
    function DatePickerDefaultParser() {
      _classCallCheck(this, DatePickerDefaultParser);
    }

    DatePickerDefaultParser.prototype.canParse = function canParse(value) {
      if (value) {
        return true;
      }
      return false;
    };

    DatePickerDefaultParser.prototype.parse = function parse(value) {
      if (value) {
        var result = value.split('/').join('-');
        result = new Date(result);
        return isNaN(result) ? null : result;
      }
      return null;
    };

    return DatePickerDefaultParser;
  }();
});
define('aurelia-materialize-bridge/datepicker/datepicker',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-task-queue', 'aurelia-dependency-injection', 'aurelia-logging', '../common/attributes', './datepicker-default-parser', '../common/events'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaTaskQueue, _aureliaDependencyInjection, _aureliaLogging, _attributes, _datepickerDefaultParser, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdDatePicker = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

  var MdDatePicker = exports.MdDatePicker = (_dec = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, _datepickerDefaultParser.DatePickerDefaultParser), _dec2 = (0, _aureliaTemplating.customAttribute)('md-datepicker'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec6 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec7 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec8 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec9 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec10 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdDatePicker(element, taskQueue, defaultParser) {
      _classCallCheck(this, MdDatePicker);

      _initDefineProp(this, 'container', _descriptor, this);

      _initDefineProp(this, 'translation', _descriptor2, this);

      _initDefineProp(this, 'value', _descriptor3, this);

      _initDefineProp(this, 'parsers', _descriptor4, this);

      _initDefineProp(this, 'selectMonths', _descriptor5, this);

      _initDefineProp(this, 'selectYears', _descriptor6, this);

      _initDefineProp(this, 'options', _descriptor7, this);

      _initDefineProp(this, 'showErrortext', _descriptor8, this);

      this.element = element;
      this.log = (0, _aureliaLogging.getLogger)('md-datepicker');
      this.taskQueue = taskQueue;
      this.parsers.push(defaultParser);
    }

    MdDatePicker.prototype.bind = function bind() {
      var _this = this;

      this.selectMonths = (0, _attributes.getBooleanFromAttributeValue)(this.selectMonths);
      this.selectYears = parseInt(this.selectYears, 10);
      this.element.classList.add('date-picker');

      var options = {
        selectMonths: this.selectMonths,
        selectYears: this.selectYears,
        onClose: function onClose() {
          $(document.activeElement).blur();
        }
      };
      var i18n = {};

      Object.assign(options, i18n);

      if (this.options) {
        Object.assign(options, this.options);

        if (this.options.onClose) {
          options.onClose = function () {
            this.options.onClose();
            $(document.activeElement).blur();
          };
        }
      }
      if (this.container) {
        options.container = this.container;
      }
      this.picker = $(this.element).pickadate(options).pickadate('picker');
      this.picker.on({
        'close': this.onClose.bind(this),
        'set': this.onSet.bind(this)
      });

      if (this.value) {
        this.picker.set('select', this.value);
      }
      if (this.options && this.options.editable) {
        $(this.element).on('keydown', function (e) {
          if (e.keyCode === 13 || e.keyCode === 9) {
            if (_this.parseDate($(_this.element).val())) {
              _this.closeDatePicker();
            } else {
              _this.openDatePicker();
            }
          } else {
            _this.value = null;
          }
        });
      } else {
        $(this.element).on('focusin', function () {
          _this.openDatePicker();
        });
      }
      if (this.options.showIcon) {
        this.element.classList.add('left');
        var calendarIcon = document.createElement('i');
        calendarIcon.classList.add('right');
        calendarIcon.classList.add('material-icons');
        calendarIcon.textContent = 'today';
        this.element.parentNode.insertBefore(calendarIcon, this.element.nextSibling);
        $(calendarIcon).on('click', this.onCalendarIconClick.bind(this));

        options.iconClass = options.iconClass || 'std-icon-fixup';
        calendarIcon.classList.add(options.iconClass);
      }

      this.movePickerCloserToSrc();
      this.setErrorTextAttribute();
    };

    MdDatePicker.prototype.parseDate = function parseDate(value) {
      if (this.parsers && this.parsers.length && this.parsers.length > 0) {
        for (var _iterator = this.parsers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var parser = _ref;

          if (parser.canParse(value)) {
            var parsedDate = parser.parse(value);
            if (parsedDate !== null) {
              this.picker.set('select', parsedDate);
              return true;
            }
          }
        }
      }
      return false;
    };

    MdDatePicker.prototype.movePickerCloserToSrc = function movePickerCloserToSrc() {
      $(this.picker.$root).appendTo($(this.element).parent());
    };

    MdDatePicker.prototype.detached = function detached() {
      if (this.picker) {
        this.picker.stop();
      }
    };

    MdDatePicker.prototype.openDatePicker = function openDatePicker() {
      $(this.element).pickadate('open');
    };

    MdDatePicker.prototype.closeDatePicker = function closeDatePicker() {
      $(this.element).pickadate('close');
    };

    MdDatePicker.prototype.onClose = function onClose() {
      var selected = this.picker.get('select');
      this.value = selected ? selected.obj : null;
      (0, _events.fireEvent)(this.element, 'blur');
    };

    MdDatePicker.prototype.onCalendarIconClick = function onCalendarIconClick(event) {
      event.stopPropagation();
      this.openDatePicker();
    };

    MdDatePicker.prototype.onSet = function onSet(value) {
      if (this.options && this.options.closeOnSelect && value.select) {
        this.value = value.select;
        this.picker.close();
      }
    };

    MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
      if (this.options.max && newValue > this.options.max) {
        this.value = this.options.max;
      }
      this.log.debug('selectedChanged', this.value);

      this.picker.set('select', this.value);
    };

    MdDatePicker.prototype.showErrortextChanged = function showErrortextChanged() {
      this.setErrorTextAttribute();
    };

    MdDatePicker.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
      var element = this.element;
      if (!element) return;
      this.log.debug('showErrortextChanged: ' + this.showErrortext);
      element.setAttribute('data-show-errortext', (0, _attributes.getBooleanFromAttributeValue)(this.showErrortext));
    };

    return MdDatePicker;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'container', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'translation', [_dec4], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec5], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'parsers', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selectMonths', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'selectYears', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return 15;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return {};
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showErrortext', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/dropdown/dropdown-element',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdDropdownElement = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3, _temp;

  var MdDropdownElement = exports.MdDropdownElement = (_dec = (0, _aureliaTemplating.customElement)('md-dropdown'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec7 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec8 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec9 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec10 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function MdDropdownElement(element) {
      _classCallCheck(this, MdDropdownElement);

      _initDefineProp(this, 'alignment', _descriptor, this);

      _initDefineProp(this, 'belowOrigin', _descriptor2, this);

      _initDefineProp(this, 'constrainWidth', _descriptor3, this);

      _initDefineProp(this, 'gutter', _descriptor4, this);

      _initDefineProp(this, 'hover', _descriptor5, this);

      _initDefineProp(this, 'mdTitle', _descriptor6, this);

      _initDefineProp(this, 'inDuration', _descriptor7, this);

      _initDefineProp(this, 'outDuration', _descriptor8, this);

      this.element = element;
      this.controlId = 'md-dropdown-' + MdDropdown.id++;
    }

    MdDropdownElement.prototype.attached = function attached() {
      $(this.element).dropdown({
        alignment: this.alignment,
        belowOrigin: (0, _attributes.getBooleanFromAttributeValue)(this.belowOrigin),
        constrain_width: (0, _attributes.getBooleanFromAttributeValue)(this.constrainWidth),
        gutter: parseInt(this.gutter, 10),
        hover: (0, _attributes.getBooleanFromAttributeValue)(this.hover),
        inDuration: parseInt(this.inDuration, 10),
        outDuration: parseInt(this.outDuration, 10)
      });
    };

    return MdDropdownElement;
  }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'alignment', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 'left';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'belowOrigin', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'constrainWidth', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'gutter', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'hover', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdTitle', [_dec8], {
    enumerable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'inDuration', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return 300;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'outDuration', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
      return 225;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/dropdown/dropdown',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdDropdown = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3, _temp;

  var MdDropdown = exports.MdDropdown = (_dec = (0, _aureliaTemplating.customAttribute)('md-dropdown'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec7 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec8 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec9 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec10 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec11 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec12 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function MdDropdown(element) {
      _classCallCheck(this, MdDropdown);

      _initDefineProp(this, 'activates', _descriptor, this);

      _initDefineProp(this, 'ref', _descriptor2, this);

      _initDefineProp(this, 'alignment', _descriptor3, this);

      _initDefineProp(this, 'belowOrigin', _descriptor4, this);

      _initDefineProp(this, 'constrainWidth', _descriptor5, this);

      _initDefineProp(this, 'gutter', _descriptor6, this);

      _initDefineProp(this, 'hover', _descriptor7, this);

      _initDefineProp(this, 'mdTitle', _descriptor8, this);

      _initDefineProp(this, 'inDuration', _descriptor9, this);

      _initDefineProp(this, 'outDuration', _descriptor10, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdDropdown.prototype.attached = function attached() {
      this.handleActivateElement();
      this.contentAttributeManager = new _attributeManager.AttributeManager(document.getElementById(this.activates));

      this.attributeManager.addClasses('dropdown-button');
      this.contentAttributeManager.addClasses('dropdown-content');


      $(this.element).dropdown({
        alignment: this.alignment,
        belowOrigin: (0, _attributes.getBooleanFromAttributeValue)(this.belowOrigin),
        constrain_width: (0, _attributes.getBooleanFromAttributeValue)(this.constrainWidth),
        constrainWidth: (0, _attributes.getBooleanFromAttributeValue)(this.constrainWidth),
        gutter: parseInt(this.gutter, 10),
        hover: (0, _attributes.getBooleanFromAttributeValue)(this.hover),
        inDuration: parseInt(this.inDuration, 10),
        outDuration: parseInt(this.outDuration, 10)
      });
    };

    MdDropdown.prototype.detached = function detached() {
      this.attributeManager.removeAttributes('data-activates');
      this.attributeManager.removeClasses('dropdown-button');
      this.contentAttributeManager.removeClasses('dropdown-content');
    };

    MdDropdown.prototype.handleActivateElement = function handleActivateElement() {
      if (this.ref) {
        var id = this.ref.getAttribute('id');
        if (!id) {
          id = 'md-dropdown-' + MdDropdown.elementId++;
          this.ref.setAttribute('id', id);
          this.activates = id;
        }
        this.id = MdDropdown.elementId++;
      }
      this.attributeManager.addAttributes({ 'data-activates': this.activates });
    };

    return MdDropdown;
  }(), _class3.elementId = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'activates', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ref', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'alignment', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 'left';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'belowOrigin', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'constrainWidth', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'gutter', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'hover', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'mdTitle', [_dec10], {
    enumerable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'inDuration', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
      return 300;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'outDuration', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
      return 225;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/dropdown/dropdown-fix',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.applyMaterializeDropdownFix = applyMaterializeDropdownFix;
  function applyMaterializeDropdownFix() {
    $.fn.dropdown = function (options) {
      var defaults = {
        inDuration: 300,
        outDuration: 225,
        constrain_width: true,
        hover: false,
        gutter: 0,
        belowOrigin: false,
        alignment: 'left',
        stopPropagation: false
      };

      if (options === 'open') {
        this.each(function () {
          $(this).trigger('open');
        });
        return false;
      }

      if (options === 'close') {
        this.each(function () {
          $(this).trigger('close');
        });
        return false;
      }

      this.each(function () {
        var origin = $(this);
        var currentOptions = $.extend({}, defaults, options);
        var isFocused = false;

        var activates = $('#' + origin.attr('data-activates'));

        function updateOptions() {
          if (origin.data('induration') !== undefined) {
            currentOptions.inDuration = origin.data('induration');
          }
          if (origin.data('outduration') !== undefined) {
            currentOptions.outDuration = origin.data('outduration');
          }
          if (origin.data('constrainwidth') !== undefined) {
            currentOptions.constrain_width = origin.data('constrainwidth');
          }
          if (origin.data('hover') !== undefined) {
            currentOptions.hover = origin.data('hover');
          }
          if (origin.data('gutter') !== undefined) {
            currentOptions.gutter = origin.data('gutter');
          }
          if (origin.data('beloworigin') !== undefined) {
            currentOptions.belowOrigin = origin.data('beloworigin');
          }
          if (origin.data('alignment') !== undefined) {
            currentOptions.alignment = origin.data('alignment');
          }
          if (origin.data('stoppropagation') !== undefined) {
            currentOptions.stopPropagation = origin.data('stoppropagation');
          }
        }

        updateOptions();

        origin.after(activates);

        function placeDropdown(eventType) {
          if (eventType === 'focus') {
            isFocused = true;
          }

          updateOptions();

          activates.addClass('active');
          origin.addClass('active');

          if (currentOptions.constrain_width === true) {
            activates.css('width', origin.outerWidth());
          } else {
            activates.css('white-space', 'nowrap');
          }

          var windowHeight = window.innerHeight;
          var originHeight = origin.innerHeight();
          var offsetLeft = origin.offset().left;
          var offsetTop = origin.offset().top - $(window).scrollTop();
          var currAlignment = currentOptions.alignment;
          var gutterSpacing = 0;
          var leftPosition = 0;

          var verticalOffset = 0;
          if (currentOptions.belowOrigin === true) {
            verticalOffset = originHeight;
          }

          var scrollYOffset = 0;
          var scrollXOffset = 0;
          var wrapper = origin.parent();
          if (!wrapper.is('body')) {
            if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
              scrollYOffset = wrapper[0].scrollTop;
            }
            if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
              scrollXOffset = wrapper[0].scrollLeft;
            }
          }

          if (offsetLeft + activates.innerWidth() > $(window).width()) {
            currAlignment = 'right';
          } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
            currAlignment = 'left';
          }

          if (offsetTop + activates.innerHeight() > windowHeight) {
            if (offsetTop + originHeight - activates.innerHeight() < 0) {
              var adjustedHeight = windowHeight - offsetTop - verticalOffset;
              activates.css('max-height', adjustedHeight);
            } else {
              if (!verticalOffset) {
                verticalOffset += originHeight;
              }
              verticalOffset -= activates.innerHeight();
            }
          }

          if (currAlignment === 'left') {
            gutterSpacing = currentOptions.gutter;
            leftPosition = origin.position().left + gutterSpacing;
          } else if (currAlignment === 'right') {
            var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
            gutterSpacing = -currentOptions.gutter;
            leftPosition = offsetRight + gutterSpacing;
          }

          activates.css({
            position: 'absolute',
            top: origin.position().top + verticalOffset + scrollYOffset,
            left: leftPosition + scrollXOffset
          });

          activates.stop(true, true).css('opacity', 0).slideDown({
            queue: false,
            duration: currentOptions.inDuration,
            easing: 'easeOutCubic',
            complete: function complete() {
              $(this).css('height', '');
            }
          }).animate({ opacity: 1 }, { queue: false, duration: currentOptions.inDuration, easing: 'easeOutSine' });
        }

        function hideDropdown() {
          isFocused = false;
          activates.fadeOut(currentOptions.outDuration);
          activates.removeClass('active');
          origin.removeClass('active');
          setTimeout(function () {
            activates.css('max-height', '');
          }, currentOptions.outDuration);
        }

        if (currentOptions.hover) {
          (function () {
            var open = false;
            origin.unbind('click.' + origin.attr('id'));

            origin.on('mouseenter', function (e) {
              if (open === false) {
                placeDropdown();
                open = true;
              }
            });
            origin.on('mouseleave', function (e) {
              var toEl = e.toElement || e.relatedTarget;
              if (!$(toEl).closest('.dropdown-content').is(activates)) {
                activates.stop(true, true);
                hideDropdown();
                open = false;
              }
            });

            activates.on('mouseleave', function (e) {
              var toEl = e.toElement || e.relatedTarget;
              if (!$(toEl).closest('.dropdown-button').is(origin)) {
                activates.stop(true, true);
                hideDropdown();
                open = false;
              }
            });
          })();
        } else {
          origin.unbind('click.' + origin.attr('id'));
          origin.bind('click.' + origin.attr('id'), function (e) {
            if (!isFocused) {
              if (origin[0] === e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
                e.preventDefault();
                if (currentOptions.stopPropagation) {
                  e.stopPropagation();
                }
                placeDropdown('click');
              } else if (origin.hasClass('active')) {
                hideDropdown();
                $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
              }

              if (activates.hasClass('active')) {
                $(document).bind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e2) {
                  if (!activates.is(e2.target) && !origin.is(e2.target) && !origin.find(e2.target).length) {
                    hideDropdown();
                    $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
                  }
                });
              }
            }
          });
        }
        origin.on('open', function (e, eventType) {
          placeDropdown(eventType);
        });
        origin.on('close', hideDropdown);
      });
    };

    $(document).ready(function () {
      $('.dropdown-button').dropdown();
    });
  }
});
define('aurelia-materialize-bridge/fab/fab',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdFab = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var MdFab = exports.MdFab = (_dec = (0, _aureliaTemplating.customElement)('md-fab'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdFab(element) {
      _classCallCheck(this, MdFab);

      _initDefineProp(this, 'mdFixed', _descriptor, this);

      _initDefineProp(this, 'mdLarge', _descriptor2, this);

      this.element = element;
    }

    MdFab.prototype.attached = function attached() {
      this.mdFixed = (0, _attributes.getBooleanFromAttributeValue)(this.mdFixed);
      this.mdLarge = (0, _attributes.getBooleanFromAttributeValue)(this.mdLarge);
    };

    return MdFab;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdFixed', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdLarge', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/file/file',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _events, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdFileInput = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var MdFileInput = exports.MdFileInput = (_dec = (0, _aureliaTemplating.customElement)('md-file'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdFileInput(element) {
      _classCallCheck(this, MdFileInput);

      _initDefineProp(this, 'mdCaption', _descriptor, this);

      _initDefineProp(this, 'mdMultiple', _descriptor2, this);

      _initDefineProp(this, 'mdLabelValue', _descriptor3, this);

      _initDefineProp(this, 'disabled', _descriptor4, this);

      this.files = [];
      this._suspendUpdate = false;

      this.element = element;
      this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
    }

    MdFileInput.prototype.attached = function attached() {
      this.mdMultiple = (0, _attributes.getBooleanFromAttributeValue)(this.mdMultiple);
      $(this.filePath).on('change', this.handleChangeFromNativeInput);
    };

    MdFileInput.prototype.detached = function detached() {
      $(this.element).off('change', this.handleChangeFromNativeInput);
    };

    MdFileInput.prototype.handleChangeFromNativeInput = function handleChangeFromNativeInput() {
      if (!this._suspendUpdate) {
        this._suspendUpdate = true;
        (0, _events.fireEvent)(this.filePath, 'change', { files: this.files });
        (0, _events.fireMaterializeEvent)(this.filePath, 'change', { files: this.files });
        this._suspendUpdate = false;
      }
    };

    return MdFileInput;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdCaption', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 'File';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdMultiple', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdLabelValue', [_dec5], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/footer/footer',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdFooter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdFooter = exports.MdFooter = (_dec = (0, _aureliaTemplating.customAttribute)('md-footer'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdFooter(element) {
      _classCallCheck(this, MdFooter);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdFooter.prototype.bind = function bind() {
      this.attributeManager.addClasses('page-footer');
    };

    MdFooter.prototype.unbind = function unbind() {
      this.attributeManager.removeClasses('page-footer');
    };

    return MdFooter;
  }()) || _class) || _class);
});
define('aurelia-materialize-bridge/input/input-prefix',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdPrefix = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdPrefix = exports.MdPrefix = (_dec = (0, _aureliaTemplating.customAttribute)('md-prefix'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdPrefix(element) {
      _classCallCheck(this, MdPrefix);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdPrefix.prototype.bind = function bind() {
      this.attributeManager.addClasses('prefix');
    };

    MdPrefix.prototype.unbind = function unbind() {
      this.attributeManager.removeClasses('prefix');
    };

    return MdPrefix;
  }()) || _class) || _class);
});
define('aurelia-materialize-bridge/input/input-update-service',['exports', 'aurelia-task-queue', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTaskQueue, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdInputUpdateService = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var MdInputUpdateService = exports.MdInputUpdateService = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaTaskQueue.TaskQueue), _dec(_class = function () {
    function MdInputUpdateService(taskQueue) {
      _classCallCheck(this, MdInputUpdateService);

      this._updateCalled = false;

      this.log = (0, _aureliaLogging.getLogger)('MdInputUpdateService');
      this.taskQueue = taskQueue;
    }

    MdInputUpdateService.prototype.materializeUpdate = function materializeUpdate() {
      this.log.debug('executing Materialize.updateTextFields');
      Materialize.updateTextFields();
      this._updateCalled = false;
    };

    MdInputUpdateService.prototype.update = function update() {
      this.log.debug('update called');
      if (!this._updateCalled) {
        this._updateCalled = true;
        this.taskQueue.queueTask(this.materializeUpdate.bind(this));
      }
    };

    return MdInputUpdateService;
  }()) || _class);
});
define('aurelia-materialize-bridge/input/input',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/attributes', './input-update-service', '../common/events'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _attributes, _inputUpdateService, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdInput = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _class3, _temp;

  var MdInput = exports.MdInput = (_dec = (0, _aureliaTemplating.customElement)('md-input'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, _inputUpdateService.MdInputUpdateService), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec7 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec8 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec9 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec10 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec11 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function MdInput(element, taskQueue, updateService) {
      _classCallCheck(this, MdInput);

      _initDefineProp(this, 'mdLabel', _descriptor, this);

      _initDefineProp(this, 'mdBlurOnEnter', _descriptor2, this);

      _initDefineProp(this, 'mdDisabled', _descriptor3, this);

      _initDefineProp(this, 'mdPlaceholder', _descriptor4, this);

      _initDefineProp(this, 'mdTextArea', _descriptor5, this);

      _initDefineProp(this, 'mdType', _descriptor6, this);

      _initDefineProp(this, 'mdStep', _descriptor7, this);

      _initDefineProp(this, 'mdValidate', _descriptor8, this);

      _initDefineProp(this, 'mdShowErrortext', _descriptor9, this);

      _initDefineProp(this, 'mdValidateError', _descriptor10, this);

      _initDefineProp(this, 'mdValidateSuccess', _descriptor11, this);

      _initDefineProp(this, 'mdValue', _descriptor12, this);

      this._suspendUpdate = false;

      this.element = element;
      this.taskQueue = taskQueue;
      this.controlId = 'md-input-' + MdInput.id++;
      this.updateService = updateService;
      this.blurOnEnter = this.blurOnEnter.bind(this);
    }

    MdInput.prototype.bind = function bind() {
      this.mdTextArea = (0, _attributes.getBooleanFromAttributeValue)(this.mdTextArea);
      this.mdShowErrortext = (0, _attributes.getBooleanFromAttributeValue)(this.mdShowErrortext);
      this.mdBlurOnEnter = (0, _attributes.getBooleanFromAttributeValue)(this.mdBlurOnEnter);
    };

    MdInput.prototype.attached = function attached() {
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdValidate)) {
        this.input.classList.add('validate');
      }
      if (this.mdValidateError) {
        this.label.setAttribute('data-error', this.mdValidateError);
      }
      if (this.mdValidateSuccess) {
        this.label.setAttribute('data-success', this.mdValidateSuccess);
      }
      if (this.mdPlaceholder) {
        this.input.setAttribute('placeholder', this.mdPlaceholder);
      }
      if (this.mdShowErrortext) {
        this.input.setAttribute('data-show-errortext', this.mdShowErrortext);
      }
      this.updateService.update();

      if (this.mdType === 'time') {
        $(this.input).siblings('label').addClass('active');
      }
      this.attachEventHandlers();
    };

    MdInput.prototype.detached = function detached() {
      this.detachEventHandlers();
    };

    MdInput.prototype.blur = function blur() {
      (0, _events.fireEvent)(this.element, 'blur');
    };

    MdInput.prototype.focus = function focus() {
      (0, _events.fireEvent)(this.element, 'focus');
    };

    MdInput.prototype.mdValueChanged = function mdValueChanged() {
      if (!$(this.input).is(':focus')) {
        this.updateService.update();
      }
      if (this.mdTextArea) {
        $(this.input).trigger('autoresize');
      }
    };

    MdInput.prototype.attachEventHandlers = function attachEventHandlers() {
      if (this.mdBlurOnEnter) {
        this.element.addEventListener('keyup', this.blurOnEnter);
      }
    };

    MdInput.prototype.detachEventHandlers = function detachEventHandlers() {
      if (this.mdBlurOnEnter) {
        this.element.removeEventListener('keyup', this.blurOnEnter);
      }
    };

    MdInput.prototype.blurOnEnter = function blurOnEnter(e) {
      if (e.keyCode && e.keyCode === 13) {
        this.input.blur();
      }
    };

    return MdInput;
  }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdLabel', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdBlurOnEnter', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdPlaceholder', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdTextArea', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdType', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return 'text';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mdStep', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return 'any';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidate', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowErrortext', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidateError', [_dec12], {
    enumerable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'mdValidateSuccess', [_dec13], {
    enumerable: true,
    initializer: null
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'mdValue', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/modal/modal',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager', '../common/events'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributes, _attributeManager, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdModal = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdModal = exports.MdModal = (_dec = (0, _aureliaTemplating.customAttribute)('md-modal'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdModal(element) {
      _classCallCheck(this, MdModal);

      _initDefineProp(this, 'dismissible', _descriptor, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
      this.onComplete = this.onComplete.bind(this);
      this.onReady = this.onReady.bind(this);
    }

    MdModal.prototype.attached = function attached() {
      this.attributeManager.addClasses('modal');
      $(this.element).modal({
        complete: this.onComplete,
        dismissible: (0, _attributes.getBooleanFromAttributeValue)(this.dismissible),
        ready: this.onReady
      });
    };

    MdModal.prototype.detached = function detached() {
      this.attributeManager.removeClasses('modal');
    };

    MdModal.prototype.onComplete = function onComplete() {
      (0, _events.fireMaterializeEvent)(this.element, 'modal-complete');
    };

    MdModal.prototype.onReady = function onReady(modal, trigger) {
      (0, _events.fireMaterializeEvent)(this.element, 'modal-ready', { modal: modal, trigger: trigger });
    };

    MdModal.prototype.open = function open() {
      $(this.element).modal('open');
    };

    MdModal.prototype.close = function close() {
      $(this.element).modal('close');
    };

    return MdModal;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'dismissible', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/modal/modal-trigger',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager', '../common/events'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributes, _attributeManager, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdModalTrigger = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdModalTrigger = exports.MdModalTrigger = (_dec = (0, _aureliaTemplating.customAttribute)('md-modal-trigger'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdModalTrigger(element) {
      _classCallCheck(this, MdModalTrigger);

      _initDefineProp(this, 'dismissible', _descriptor, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
      this.onComplete = this.onComplete.bind(this);
    }

    MdModalTrigger.prototype.attached = function attached() {
      this.attributeManager.addClasses('modal-trigger');
      $(this.element).leanModal({
        complete: this.onComplete,
        dismissible: (0, _attributes.getBooleanFromAttributeValue)(this.dismissible)
      });
    };

    MdModalTrigger.prototype.detached = function detached() {
      this.attributeManager.removeClasses('modal-trigger');
    };

    MdModalTrigger.prototype.onComplete = function onComplete() {
      (0, _events.fireMaterializeEvent)(this.element, 'modal-complete');
    };

    return MdModalTrigger;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'dismissible', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/navbar/navbar',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributes, _attributeManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdNavbar = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var MdNavbar = exports.MdNavbar = (_dec = (0, _aureliaTemplating.customElement)('md-navbar'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdNavbar(element) {
      _classCallCheck(this, MdNavbar);

      _initDefineProp(this, 'mdFixed', _descriptor, this);

      _initDefineProp(this, 'mdAutoHeight', _descriptor2, this);

      this.element = element;
    }

    MdNavbar.prototype.attached = function attached() {
      this.fixedAttributeManager = new _attributeManager.AttributeManager(this.fixedAnchor);
      this.navAttributeManager = new _attributeManager.AttributeManager(this.nav);
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdFixed)) {
        this.fixedAttributeManager.addClasses('navbar-fixed');
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdAutoHeight)) {
        this.navAttributeManager.addClasses('md-auto-height');
      }
    };

    MdNavbar.prototype.detached = function detached() {
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdFixed)) {
        this.fixedAttributeManager.removeClasses('navbar-fixed');
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdAutoHeight)) {
        this.navAttributeManager.addClasses('md-auto-height');
      }
    };

    return MdNavbar;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdFixed', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdAutoHeight', [_dec4], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/pagination/pagination',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _events, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdPagination = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  var MdPagination = exports.MdPagination = (_dec = (0, _aureliaTemplating.customElement)('md-pagination'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneWay
  }), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdPagination(element) {
      _classCallCheck(this, MdPagination);

      _initDefineProp(this, 'mdActivePage', _descriptor, this);

      _initDefineProp(this, 'mdPages', _descriptor2, this);

      _initDefineProp(this, 'mdVisiblePageLinks', _descriptor3, this);

      _initDefineProp(this, 'mdPageLinks', _descriptor4, this);

      _initDefineProp(this, 'mdShowFirstLast', _descriptor5, this);

      _initDefineProp(this, 'mdShowPrevNext', _descriptor6, this);

      _initDefineProp(this, 'mdShowPageLinks', _descriptor7, this);

      this.numberOfLinks = 15;
      this.pages = 5;

      this.element = element;
    }

    MdPagination.prototype.bind = function bind() {
      this.pages = parseInt(this.mdPages, 10);

      this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
      this.mdShowFirstLast = (0, _attributes.getBooleanFromAttributeValue)(this.mdShowFirstLast);
      this.mdShowPrevNext = (0, _attributes.getBooleanFromAttributeValue)(this.mdShowPrevNext);
      this.mdPageLinks = this.generatePageLinks();
    };

    MdPagination.prototype.setActivePage = function setActivePage(page) {
      this.mdActivePage = parseInt(page, 10);
      this.mdPageLinks = this.generatePageLinks();
      (0, _events.fireMaterializeEvent)(this.element, 'page-changed', this.mdActivePage);
    };

    MdPagination.prototype.setFirstPage = function setFirstPage() {
      if (this.mdActivePage > 1) {
        this.setActivePage(1);
      }
    };

    MdPagination.prototype.setLastPage = function setLastPage() {
      if (this.mdActivePage < this.pages) {
        this.setActivePage(this.pages);
      }
    };

    MdPagination.prototype.setPreviousPage = function setPreviousPage() {
      if (this.mdActivePage > 1) {
        this.setActivePage(this.mdActivePage - 1);
      }
    };

    MdPagination.prototype.setNextPage = function setNextPage() {
      if (this.mdActivePage < this.pages) {
        this.setActivePage(this.mdActivePage + 1);
      }
    };

    MdPagination.prototype.mdPagesChanged = function mdPagesChanged() {
      this.pages = parseInt(this.mdPages, 10);
      this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
      this.setActivePage(1);
    };

    MdPagination.prototype.mdVisiblePageLinksChanged = function mdVisiblePageLinksChanged() {
      this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
      this.mdPageLinks = this.generatePageLinks();
    };

    MdPagination.prototype.generatePageLinks = function generatePageLinks() {
      var midPoint = parseInt(this.numberOfLinks / 2, 10);
      var start = Math.max(this.mdActivePage - midPoint, 0);

      if (start + midPoint * 2 > this.pages) start = this.pages - midPoint * 2;
      var end = Math.min(start + this.numberOfLinks, this.pages);

      var list = [];
      for (var i = start; i < end; i++) {
        list.push(i);
      }

      return list;
    };

    return MdPagination;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdActivePage', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 1;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdPages', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return 5;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdVisiblePageLinks', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 15;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdPageLinks', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowFirstLast', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowPrevNext', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowPageLinks', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/parallax/parallax',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdParallax = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdParallax = exports.MdParallax = (_dec = (0, _aureliaTemplating.customAttribute)('md-parallax'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdParallax(element) {
      _classCallCheck(this, MdParallax);

      this.element = element;
    }

    MdParallax.prototype.attached = function attached() {
      $(this.element).parallax();
    };

    MdParallax.prototype.detached = function detached() {};

    return MdParallax;
  }()) || _class) || _class);
});
define('aurelia-materialize-bridge/progress/progress',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdProgress = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var MdProgress = exports.MdProgress = (_dec = (0, _aureliaTemplating.customElement)('md-progress'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec7 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdProgress(element) {
      _classCallCheck(this, MdProgress);

      _initDefineProp(this, 'mdColor', _descriptor, this);

      _initDefineProp(this, 'mdPixelSize', _descriptor2, this);

      _initDefineProp(this, 'mdSize', _descriptor3, this);

      _initDefineProp(this, 'mdType', _descriptor4, this);

      _initDefineProp(this, 'mdValue', _descriptor5, this);

      this.element = element;
    }

    MdProgress.prototype.bind = function bind() {};

    MdProgress.prototype.attached = function attached() {
      this.mdPixelSizeChanged(this.mdPixelSize);
    };

    MdProgress.prototype.mdSizeChanged = function mdSizeChanged(newValue) {
      this.mdPixelSize = null;
    };

    MdProgress.prototype.mdPixelSizeChanged = function mdPixelSizeChanged(newValue) {
      if (this.wrapper) {
        newValue = newValue === null || newValue === '' || isNaN(newValue) ? '' : newValue + 'px';
        this.wrapper.style.height = newValue;
        this.wrapper.style.width = newValue;
      }
    };

    return MdProgress;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdColor', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdPixelSize', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdSize', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 'big';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdType', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 'linear';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdValue', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/pushpin/pushpin',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdPushpin = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var MdPushpin = exports.MdPushpin = (_dec = (0, _aureliaTemplating.customAttribute)('md-pushpin'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdPushpin(element) {
      _classCallCheck(this, MdPushpin);

      _initDefineProp(this, 'bottom', _descriptor, this);

      _initDefineProp(this, 'offset', _descriptor2, this);

      _initDefineProp(this, 'top', _descriptor3, this);

      this.element = element;
    }

    MdPushpin.prototype.attached = function attached() {
      $(this.element).pushpin({
        bottom: this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10),
        offset: parseInt(this.offset, 10),
        top: parseInt(this.top, 10)
      });
    };

    MdPushpin.prototype.detached = function detached() {};

    return MdPushpin;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'bottom', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return Infinity;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'offset', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'top', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/radio/radio',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdRadio = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

  var MdRadio = exports.MdRadio = (_dec = (0, _aureliaTemplating.customElement)('md-radio'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function MdRadio(element) {
      _classCallCheck(this, MdRadio);

      _initDefineProp(this, 'mdChecked', _descriptor, this);

      _initDefineProp(this, 'mdDisabled', _descriptor2, this);

      _initDefineProp(this, 'mdGap', _descriptor3, this);

      _initDefineProp(this, 'mdModel', _descriptor4, this);

      _initDefineProp(this, 'mdName', _descriptor5, this);

      _initDefineProp(this, 'mdValue', _descriptor6, this);

      this.element = element;
      this.controlId = 'md-radio-' + MdRadio.id++;
    }

    MdRadio.prototype.attached = function attached() {
      this.attributeManager = new _attributeManager.AttributeManager(this.radio);
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdGap)) {
        this.attributeManager.addClasses('with-gap');
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdDisabled)) {
        this.radio.disabled = true;
      }
    };

    MdRadio.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['with-gap', 'disabled']);
    };

    MdRadio.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
      if (this.radio) {
        this.radio.disabled = !!newValue;
      }
    };

    return MdRadio;
  }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdChecked', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdGap', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdModel', [_dec6], {
    enumerable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdName', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mdValue', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/range/range',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdRange = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var MdRange = exports.MdRange = (_dec = (0, _aureliaTemplating.customElement)('md-range'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec6 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec(_class = _dec2(_class = (_class2 = function MdRange(element) {
    _classCallCheck(this, MdRange);

    _initDefineProp(this, 'mdMin', _descriptor, this);

    _initDefineProp(this, 'mdMax', _descriptor2, this);

    _initDefineProp(this, 'mdStep', _descriptor3, this);

    _initDefineProp(this, 'mdValue', _descriptor4, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-range');
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdMin', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdMax', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return 100;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdStep', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 1;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdValue', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/scrollfire/scrollfire-patch',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var ScrollfirePatch = exports.ScrollfirePatch = (_temp = _class = function () {
    function ScrollfirePatch() {
      _classCallCheck(this, ScrollfirePatch);
    }

    ScrollfirePatch.prototype.patch = function patch() {
      if (!ScrollfirePatch.patched) {
        ScrollfirePatch.patched = true;

        window.Materialize.scrollFire = function (options) {
          var didScroll = false;
          window.addEventListener('scroll', function () {
            didScroll = true;
          });

          setInterval(function () {
            if (didScroll) {
              didScroll = false;

              var windowScroll = window.pageYOffset + window.innerHeight;
              for (var i = 0; i < options.length; i++) {
                var value = options[i];
                var selector = value.selector;
                var offset = value.offset;
                var callback = value.callback;

                var currentElement = document.querySelector(selector);
                if (currentElement !== null) {
                  var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                  if (windowScroll > elementOffset + offset) {
                    if (value.done !== true) {
                      if (typeof callback === 'string') {
                        var callbackFunc = new Function(callback);
                        callbackFunc();
                      } else if (typeof callback === 'function') {
                        callback();
                      }
                      value.done = true;
                    }
                  }
                }
              }
            }
          }, 100);
        };
      }
    };

    return ScrollfirePatch;
  }(), _class.patched = false, _temp);
});
define('aurelia-materialize-bridge/scrollfire/scrollfire-target',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdScrollfireTarget = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var MdScrollfireTarget = exports.MdScrollfireTarget = (_dec = (0, _aureliaTemplating.customAttribute)('md-scrollfire-target'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function MdScrollfireTarget(element) {
    _classCallCheck(this, MdScrollfireTarget);

    _initDefineProp(this, 'callback', _descriptor, this);

    _initDefineProp(this, 'offset', _descriptor2, this);

    this.element = element;
  }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'callback', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'offset', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/scrollfire/scrollfire',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdScrollfire = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var MdScrollfire = exports.MdScrollfire = (_dec = (0, _aureliaTemplating.customAttribute)('md-scrollfire'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function MdScrollfire(element) {
      _classCallCheck(this, MdScrollfire);

      this.targetId = 0;

      this.element = element;
      this.log = (0, _aureliaLogging.getLogger)('md-scrollfire');
    }

    MdScrollfire.prototype.attached = function attached() {
      var _this = this;

      var targets = $('[md-scrollfire-target]', this.element);
      if (targets.length > 0) {
        (function () {
          _this.log.debug('targets', targets);
          var self = _this;
          var options = [];
          targets.each(function (i, el) {
            var target = $(el);
            if (!target.attr('id')) {
              target.attr('id', 'md-scrollfire-target-' + self.targetId++);
            }
            options.push({
              selector: '#' + target.attr('id'),
              callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
              offset: parseInt(target.get(0).au['md-scrollfire-target'].viewModel.offset, 10)
            });
          });
          if (options.length > 0) {
            _this.log.debug('configuring scrollFire with these options:', options);
            Materialize.scrollFire(options);
          }
        })();
      }
    };

    return MdScrollfire;
  }()) || _class) || _class);
});
define('aurelia-materialize-bridge/scrollspy/scrollspy',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdScrollSpy = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdScrollSpy = exports.MdScrollSpy = (_dec = (0, _aureliaTemplating.customAttribute)('md-scrollspy'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdScrollSpy(element) {
      _classCallCheck(this, MdScrollSpy);

      _initDefineProp(this, 'target', _descriptor, this);

      this.element = element;
    }

    MdScrollSpy.prototype.attached = function attached() {
      $(this.target, this.element).scrollSpy();
    };

    MdScrollSpy.prototype.detached = function detached() {};

    return MdScrollSpy;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'target', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/select/select',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-logging', '../common/events', '../common/attributes', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaLogging, _events, _attributes, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSelect = undefined;

  var LogManager = _interopRequireWildcard(_aureliaLogging);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var MdSelect = exports.MdSelect = (_dec = (0, _aureliaDependencyInjection.inject)(Element, LogManager, _aureliaBinding.BindingEngine, _aureliaTaskQueue.TaskQueue), _dec2 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdSelect(element, logManager, bindingEngine, taskQueue) {
      _classCallCheck(this, MdSelect);

      _initDefineProp(this, 'disabled', _descriptor, this);

      _initDefineProp(this, 'label', _descriptor2, this);

      _initDefineProp(this, 'showErrortext', _descriptor3, this);

      this._suspendUpdate = false;
      this.subscriptions = [];
      this.input = null;
      this.dropdownMutationObserver = null;
      this._taskqueueRunning = false;

      this.element = element;
      this.taskQueue = taskQueue;
      this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
      this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
      this.log = LogManager.getLogger('md-select');
      this.bindingEngine = bindingEngine;
    }

    MdSelect.prototype.attached = function attached() {
      var _this = this;

      this.taskQueue.queueTask(function () {
        _this.createMaterialSelect(false);

        if (_this.label) {
          var wrapper = $(_this.element).parent('.select-wrapper');
          var div = $('<div class="input-field"></div>');
          var va = _this.element.attributes.getNamedItem('validate');
          if (va) {
            div.attr(va.name, va.label);
          }
          wrapper.wrap(div);
          $('<label>' + _this.label + '</label>').insertAfter(wrapper);
        }
      });
      this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));


      $(this.element).on('change', this.handleChangeFromNativeSelect);
    };

    MdSelect.prototype.detached = function detached() {
      $(this.element).off('change', this.handleChangeFromNativeSelect);
      this.observeVisibleDropdownContent(false);
      this.dropdownMutationObserver = null;
      $(this.element).material_select('destroy');
      this.subscriptions.forEach(function (sub) {
        return sub.dispose();
      });
    };

    MdSelect.prototype.refresh = function refresh() {
      var _this2 = this;

      this.taskQueue.queueTask(function () {
        _this2.createMaterialSelect(true);
      });
    };

    MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
      this.toggleControl(newValue);
    };

    MdSelect.prototype.showErrortextChanged = function showErrortextChanged() {
      this.setErrorTextAttribute();
    };

    MdSelect.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
      var input = this.element.parentElement.querySelector('input.select-dropdown');
      if (!input) return;
      this.log.debug('showErrortextChanged: ' + this.showErrortext);
      input.setAttribute('data-show-errortext', (0, _attributes.getBooleanFromAttributeValue)(this.showErrortext));
    };

    MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
      this.log.debug('selectedOptions changed', arguments);
    };

    MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
      if (!this._suspendUpdate) {
        this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
        this._suspendUpdate = true;
        (0, _events.fireEvent)(this.element, 'change');
        this._suspendUpdate = false;
      }
    };

    MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
      this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
      if (!this._suspendUpdate) {
        this.createMaterialSelect(false);
      }
    };

    MdSelect.prototype.toggleControl = function toggleControl(disable) {
      var $wrapper = $(this.element).parent('.select-wrapper');
      if ($wrapper.length > 0) {
        if (disable) {
          $('.caret', $wrapper).addClass('disabled');
          $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
          $wrapper.attr('disabled', 'disabled');
        } else {
          $('.caret', $wrapper).removeClass('disabled');
          $('input.select-dropdown', $wrapper).attr('disabled', null);
          $wrapper.attr('disabled', null);
          $('.select-dropdown', $wrapper).dropdown({ 'hover': false, 'closeOnClick': false });
        }
      }
    };

    MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
      this.observeVisibleDropdownContent(false);
      if (destroy) {
        $(this.element).material_select('destroy');
      }
      $(this.element).material_select();
      this.toggleControl(this.disabled);
      this.observeVisibleDropdownContent(true);
      this.setErrorTextAttribute();
    };

    MdSelect.prototype.observeVisibleDropdownContent = function observeVisibleDropdownContent(attach) {
      var _this3 = this;

      if (attach) {
        if (!this.dropdownMutationObserver) {
          this.dropdownMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
            var isHidden = false;
            for (var _iterator = mutations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              var mutation = _ref;

              if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
                isHidden = true;
              }
            }
            if (isHidden) {
              _this3.dropdownMutationObserver.takeRecords();
              _this3.handleBlur();
            }
          });
        }
        this.dropdownMutationObserver.observe(this.element.parentElement.querySelector('.dropdown-content'), {
          attributes: true,
          attributeFilter: ['style']
        });
      } else {
        if (this.dropdownMutationObserver) {
          this.dropdownMutationObserver.disconnect();
          this.dropdownMutationObserver.takeRecords();
        }
      }
    };

    MdSelect.prototype.handleBlur = function handleBlur() {
      var _this4 = this;

      if (this._taskqueueRunning) return;
      this._taskqueueRunning = true;
      this.taskQueue.queueTask(function () {
        _this4.log.debug('fire blur event');
        (0, _events.fireEvent)(_this4.element, 'blur');
        _this4._taskqueueRunning = false;
      });
    };

    return MdSelect;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'label', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showErrortext', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/sidenav/sidenav-collapse',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributes, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSidenavCollapse = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdSidenavCollapse = exports.MdSidenavCollapse = (_dec = (0, _aureliaTemplating.customAttribute)('md-sidenav-collapse'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.ObserverLocator), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdSidenavCollapse(element, observerLocator) {
      _classCallCheck(this, MdSidenavCollapse);

      _initDefineProp(this, 'ref', _descriptor, this);

      this.element = element;
      this.observerLocator = observerLocator;
      this.log = (0, _aureliaLogging.getLogger)('md-sidenav-collapse');
    }

    MdSidenavCollapse.prototype.attached = function attached() {
      var _this = this;

      this.ref.whenAttached.then(function () {

        var closeOnClick = _this.ref.mdFixed && window.innerWidth > 992 ? false : (0, _attributes.getBooleanFromAttributeValue)(_this.ref.mdCloseOnClick);

        _this.element.setAttribute('data-activates', _this.ref.controlId);
        var sideNavConfig = {
          edge: _this.ref.mdEdge || 'left',

          closeOnClick: closeOnClick,
          menuWidth: parseInt(_this.ref.mdWidth, 10)
        };

        $(_this.element).sideNav(sideNavConfig);
      });
    };

    MdSidenavCollapse.prototype.detached = function detached() {};

    MdSidenavCollapse.prototype.show = function show() {
      $(this.element).sideNav('show');
    };

    MdSidenavCollapse.prototype.hide = function hide() {
      $(this.element).sideNav('hide');
    };

    return MdSidenavCollapse;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ref', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/sidenav/sidenav',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributes', '../common/attributeManager', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributes, _attributeManager, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSidenav = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

  var MdSidenav = exports.MdSidenav = (_dec = (0, _aureliaTemplating.customElement)('md-sidenav'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
    function MdSidenav(element) {
      var _this = this;

      _classCallCheck(this, MdSidenav);

      _initDefineProp(this, 'mdCloseOnClick', _descriptor, this);

      _initDefineProp(this, 'mdEdge', _descriptor2, this);

      _initDefineProp(this, 'mdFixed', _descriptor3, this);

      _initDefineProp(this, 'mdWidth', _descriptor4, this);

      this.element = element;
      this.controlId = 'md-sidenav-' + MdSidenav.id++;
      this.log = (0, _aureliaLogging.getLogger)('md-sidenav');
      this.whenAttached = new Promise(function (resolve, reject) {
        _this.attachedResolver = resolve;
      });
    }

    MdSidenav.prototype.attached = function attached() {
      this.attributeManager = new _attributeManager.AttributeManager(this.sidenav);
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdFixed)) {
        this.attributeManager.addClasses('fixed');
        if (this.mdEdge === 'right') {
          this.attributeManager.addClasses('right-aligned');
        }
      }

      this.attachedResolver();
    };

    MdSidenav.prototype.detached = function detached() {
      this.attributeManager.removeClasses(['fixed', 'right-aligned']);
    };

    MdSidenav.prototype.mdFixedChanged = function mdFixedChanged(newValue) {
      if (this.attributeManager) {
        if ((0, _attributes.getBooleanFromAttributeValue)(newValue)) {
          this.attributeManager.addClasses('fixed');
        } else {
          this.attributeManager.removeClasses('fixed');
        }
      }
    };

    return MdSidenav;
  }(), _class3.id = 0, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdCloseOnClick', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdEdge', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return 'left';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdFixed', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdWidth', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 300;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/slider/slider',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributes, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSlider = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var MdSlider = exports.MdSlider = (_dec = (0, _aureliaTemplating.customElement)('md-slider'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.inlineView)('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <slot></slot>\n  </ul>\n  </template>\n'), _dec4 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec5 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec8 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
    function MdSlider(element) {
      _classCallCheck(this, MdSlider);

      _initDefineProp(this, 'mdFillContainer', _descriptor, this);

      _initDefineProp(this, 'mdHeight', _descriptor2, this);

      _initDefineProp(this, 'mdIndicators', _descriptor3, this);

      _initDefineProp(this, 'mdInterval', _descriptor4, this);

      _initDefineProp(this, 'mdTransition', _descriptor5, this);

      this.element = element;
      this.log = (0, _aureliaLogging.getLogger)('md-slider');
    }

    MdSlider.prototype.attached = function attached() {
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdFillContainer)) {
        this.element.classList.add('fullscreen');
      }
      this.refresh();
    };

    MdSlider.prototype.pause = function pause() {
      $(this.element).slider('pause');
    };

    MdSlider.prototype.start = function start() {
      $(this.element).slider('start');
    };

    MdSlider.prototype.next = function next() {
      $(this.element).slider('next');
    };

    MdSlider.prototype.prev = function prev() {
      $(this.element).slider('prev');
    };

    MdSlider.prototype.refresh = function refresh() {
      var options = {
        height: parseInt(this.mdHeight, 10),
        indicators: (0, _attributes.getBooleanFromAttributeValue)(this.mdIndicators),
        interval: parseInt(this.mdInterval, 10),
        transition: parseInt(this.mdTransition, 10)
      };
      this.log.debug('refreshing slider, params:', options);
      $(this.element).slider(options);
    };

    MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
      this.refresh();
    };

    return MdSlider;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdFillContainer', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdHeight', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 400;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdIndicators', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdInterval', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return 6000;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mdTransition', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return 500;
    }
  })), _class2)) || _class) || _class) || _class);
});
define('aurelia-materialize-bridge/switch/switch',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributes', '../common/events'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributes, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdSwitch = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var MdSwitch = exports.MdSwitch = (_dec = (0, _aureliaTemplating.customElement)('md-switch'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.twoWay
  }), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdSwitch(element) {
      _classCallCheck(this, MdSwitch);

      _initDefineProp(this, 'mdChecked', _descriptor, this);

      _initDefineProp(this, 'mdDisabled', _descriptor2, this);

      _initDefineProp(this, 'mdLabelOff', _descriptor3, this);

      _initDefineProp(this, 'mdLabelOn', _descriptor4, this);

      this.element = element;
      this.handleChange = this.handleChange.bind(this);
    }

    MdSwitch.prototype.attached = function attached() {
      this.checkbox.checked = (0, _attributes.getBooleanFromAttributeValue)(this.mdChecked);
      if ((0, _attributes.getBooleanFromAttributeValue)(this.mdDisabled)) {
        this.checkbox.disabled = true;
      }
      this.checkbox.addEventListener('change', this.handleChange);
    };

    MdSwitch.prototype.detached = function detached() {
      this.checkbox.removeEventListener('change', this.handleChange);
    };

    MdSwitch.prototype.handleChange = function handleChange() {
      this.mdChecked = this.checkbox.checked;
      (0, _events.fireEvent)(this.element, 'blur');
    };

    MdSwitch.prototype.blur = function blur() {
      (0, _events.fireEvent)(this.element, 'blur');
    };

    MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
      if (this.checkbox) {
        this.checkbox.checked = !!newValue;
      }
    };

    MdSwitch.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
      if (this.checkbox) {
        this.checkbox.disabled = !!newValue;
      }
    };

    return MdSwitch;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdChecked', [_dec3], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdDisabled', [_dec4], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdLabelOff', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 'Off';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdLabelOn', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 'On';
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/tabs/tabs',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-task-queue', '../common/events', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaTaskQueue, _events, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdTabs = undefined;

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

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var MdTabs = exports.MdTabs = (_dec = (0, _aureliaTemplating.customAttribute)('md-tabs'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdTabs(element, taskQueue) {
      _classCallCheck(this, MdTabs);

      _initDefineProp(this, 'fixed', _descriptor, this);

      _initDefineProp(this, 'onShow', _descriptor2, this);

      _initDefineProp(this, 'responsiveThreshold', _descriptor3, this);

      _initDefineProp(this, 'swipeable', _descriptor4, this);

      _initDefineProp(this, 'transparent', _descriptor5, this);

      this.element = element;
      this.taskQueue = taskQueue;
      this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
      this.tabAttributeManagers = [];
    }

    MdTabs.prototype.attached = function attached() {
      var _this = this;

      this.attributeManager.addClasses('tabs');

      var children = this.element.querySelectorAll('li');
      [].forEach.call(children, function (child) {
        var setter = new _attributeManager.AttributeManager(child);
        setter.addClasses(['tab', 'primary-text']);
        _this.tabAttributeManagers.push(setter);
      });

      var self = this;
      $(this.element).tabs({
        onShow: function onShow(jQueryElement) {
          if (self.onShow) {
            self.onShow({ element: jQueryElement });
          }
        },
        swipeable: (0, _attributes.getBooleanFromAttributeValue)(this.swipeable),
        responsiveThreshold: this.responsiveThreshold
      });
      var childAnchors = this.element.querySelectorAll('li a');
      [].forEach.call(childAnchors, function (a) {
        a.addEventListener('click', _this.fireTabSelectedEvent);
      });
    };

    MdTabs.prototype.detached = function detached() {
      var _this2 = this;

      this.attributeManager.removeClasses('tabs');

      this.tabAttributeManagers.forEach(function (setter) {
        setter.removeClasses('tab');
      });
      this.tabAttributeManagers = [];
      var childAnchors = this.element.querySelectorAll('li a');
      [].forEach.call(childAnchors, function (a) {
        a.removeEventListener('click', _this2.fireTabSelectedEvent);
      });
    };

    MdTabs.prototype.refresh = function refresh() {
      var _this3 = this;

      this.taskQueue.queueTask(function () {
        var hrefs = [];
        $('li a', _this3.element).each(function (i, tab) {
          $(tab).parent().addClass('tab');
          hrefs.push($(tab).attr('href'));
        });
        $(hrefs).each(function (i, tab) {
          if (_this3.selectedTab.index != i) {
            $(tab).hide();
          }
        });
        _this3.taskQueue.queueTask(function () {
          $(window).trigger('resize');
        });
      });
    };

    MdTabs.prototype.fixedChanged = function fixedChanged(newValue) {
      if (newValue) {
        this.attributeManager.addClasses('tabs-fixed-width');
      } else {
        this.attributeManager.removeClasses('tabs-fixed-width');
      }
    };

    MdTabs.prototype.transparentChanged = function transparentChanged(newValue) {
      if (newValue) {
        this.attributeManager.addClasses('tabs-transparent');
      } else {
        this.attributeManager.removeClasses('tabs-transparent');
      }
    };

    MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
      var href = e.target.getAttribute('href');
      (0, _events.fireMaterializeEvent)(this.element, 'selected', href);
    };

    MdTabs.prototype.selectTab = function selectTab(id) {
      $(this.element).tabs('select_tab', id);
      this.fireTabSelectedEvent({
        target: { getAttribute: function getAttribute() {
            return '#' + id;
          } }
      });
    };

    _createClass(MdTabs, [{
      key: 'selectedTab',
      get: function get() {
        var children = this.element.querySelectorAll('li.tab a');
        var index = -1;
        var href = null;
        [].forEach.call(children, function (a, i) {
          if (a.classList.contains('active')) {
            index = i;
            href = a.href;
            return;
          }
        });
        return { href: href, index: index };
      }
    }]);

    return MdTabs;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'fixed', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'onShow', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'responsiveThreshold', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return Infinity;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'swipeable', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'transparent', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/toast/toastService',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MdToastService = exports.MdToastService = function () {
    function MdToastService() {
      _classCallCheck(this, MdToastService);
    }

    MdToastService.prototype.show = function show(message, displayLength, className) {
      return new Promise(function (resolve, reject) {
        Materialize.toast(message, displayLength, className, function () {
          resolve();
        });
      });
    };

    return MdToastService;
  }();
});
define('aurelia-materialize-bridge/tooltip/tooltip',['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdTooltip = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var MdTooltip = exports.MdTooltip = (_dec = (0, _aureliaTemplating.customAttribute)('md-tooltip'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdTooltip(element) {
      _classCallCheck(this, MdTooltip);

      _initDefineProp(this, 'position', _descriptor, this);

      _initDefineProp(this, 'delay', _descriptor2, this);

      _initDefineProp(this, 'html', _descriptor3, this);

      _initDefineProp(this, 'text', _descriptor4, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdTooltip.prototype.bind = function bind() {
      this.html = (0, _attributes.getBooleanFromAttributeValue)(this.html);
    };

    MdTooltip.prototype.attached = function attached() {
      this.attributeManager.addClasses('tooltipped');
      this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
      this.initTooltip();
    };

    MdTooltip.prototype.detached = function detached() {
      $(this.element).tooltip('remove');
      this.attributeManager.removeClasses('tooltipped');
      this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
    };

    MdTooltip.prototype.textChanged = function textChanged() {
      this.attributeManager.addAttributes({ 'data-tooltip': this.text });
      this.initTooltip();
    };

    MdTooltip.prototype.initTooltip = function initTooltip() {
      $(this.element).tooltip('remove');
      $(this.element).tooltip({
        delay: parseInt(this.delay, 10),
        html: this.html
      });
    };

    return MdTooltip;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'position', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 'bottom';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'delay', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return 50;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'html', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/transitions/fadein-image',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdFadeinImage = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdFadeinImage = exports.MdFadeinImage = (_dec = (0, _aureliaTemplating.customAttribute)('md-fadein-image'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdFadeinImage(element) {
      _classCallCheck(this, MdFadeinImage);

      _initDefineProp(this, 'ref', _descriptor, this);

      this.element = element;
      this.fadeInImage = this.fadeInImage.bind(this);
      this.log = (0, _aureliaLogging.getLogger)('md-fadein-image');
    }

    MdFadeinImage.prototype.attached = function attached() {
      this.element.addEventListener('click', this.fadeInImage);
      this.ensureOpacity();
    };

    MdFadeinImage.prototype.detached = function detached() {
      this.element.removeEventListener('click', this.fadeInImage);
    };

    MdFadeinImage.prototype.fadeInImage = function fadeInImage() {
      Materialize.fadeInImage($(this.ref));
    };

    MdFadeinImage.prototype.ensureOpacity = function ensureOpacity() {
      var opacity = window.getComputedStyle(this.ref).opacity;
      if (opacity !== 0) {
        this.ref.style.opacity = 0;
      }
    };

    return MdFadeinImage;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ref', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/transitions/staggered-list',['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-logging'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaLogging) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdStaggeredList = undefined;

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var MdStaggeredList = exports.MdStaggeredList = (_dec = (0, _aureliaTemplating.customAttribute)('md-staggered-list'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdStaggeredList(element) {
      _classCallCheck(this, MdStaggeredList);

      _initDefineProp(this, 'ref', _descriptor, this);

      this.element = element;
      this.staggerList = this.staggerList.bind(this);
      this.log = (0, _aureliaLogging.getLogger)('md-staggered-list');
    }

    MdStaggeredList.prototype.attached = function attached() {
      this.element.addEventListener('click', this.staggerList);
      this.ensureOpacity();
    };

    MdStaggeredList.prototype.detached = function detached() {
      this.element.removeEventListener('click', this.staggerList);
    };

    MdStaggeredList.prototype.staggerList = function staggerList() {
      Materialize.showStaggeredList($(this.ref));
    };

    MdStaggeredList.prototype.ensureOpacity = function ensureOpacity() {
      var items = this.ref.querySelectorAll('li');
      [].forEach.call(items, function (item) {
        var opacity = window.getComputedStyle(item).opacity;
        if (opacity !== 0) {
          item.style.opacity = 0;
        }
      });
    };

    return MdStaggeredList;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ref', [_dec3], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/validation/validationRenderer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
    function MaterializeFormValidationRenderer() {
      _classCallCheck(this, MaterializeFormValidationRenderer);

      this.className = 'md-input-validation';
      this.classNameFirst = 'md-input-validation-first';
    }

    MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
      var _this = this;

      var allElements = new Array();
      for (var _iterator = instruction.unrender, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var _ref5 = _ref2;
        var result = _ref5.result,
            elements = _ref5.elements;

        for (var _iterator3 = elements, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref6;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref6 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref6 = _i3.value;
          }

          var element = _ref6;

          this.remove(element, result);
          if (allElements.indexOf(element) == -1) {
            allElements.push(element);
          }
        }
      }
      for (var _iterator2 = instruction.render, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref4 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref4 = _i2.value;
        }

        var _ref7 = _ref4;
        var result = _ref7.result,
            elements = _ref7.elements;

        for (var _iterator4 = elements, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref8;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref8 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref8 = _i4.value;
          }

          var _element = _ref8;

          this.add(_element, result);
          if (allElements.indexOf(_element) == -1) {
            allElements.push(_element);
          }
        }
      }
      allElements.forEach(function (e) {
        return _this.underlineInput(e);
      });
    };

    MaterializeFormValidationRenderer.prototype.underlineInput = function underlineInput(element) {
      var input = void 0;
      switch (element.tagName) {
        case 'MD-INPUT':
          {
            input = element.querySelector('input') || element.querySelector('textarea');
            break;
          }
        case 'SELECT':
          {
            var selectWrapper = element.closest('.select-wrapper');
            if (selectWrapper) {
              input = selectWrapper.querySelector('input');
            }
            break;
          }
        case 'INPUT':
          {
            input = element;
            break;
          }
        default:
          break;
      }
      if (input) {
        if (element.querySelectorAll('.' + this.className).length === 0) {
          input.classList.remove('invalid');
          input.classList.add('valid');
        } else {
          input.classList.remove('valid');
          input.classList.add('invalid');
        }
      }
    };

    MaterializeFormValidationRenderer.prototype.add = function add(element, result) {
      if (result.valid) {
        return;
      }
      switch (element.tagName) {
        case 'MD-INPUT':
          {
            var label = element.querySelector('label');
            var input = element.querySelector('input') || element.querySelector('textarea');
            if (label) {
              label.removeAttribute('data-error');
            }
            if (input) {
              result.target = input;
              if (input.hasAttribute('data-show-errortext')) {
                this.addMessage(element, result);
              }
            }
            break;
          }
        case 'SELECT':
          {
            var selectWrapper = element.closest('.select-wrapper');
            if (!selectWrapper) {
              return;
            }
            var _input = selectWrapper.querySelector('input');
            if (_input) {
              result.target = _input;
              if (!(_input.hasAttribute('data-show-errortext') && _input.getAttribute('data-show-errortext') === 'false')) {
                this.addMessage(selectWrapper, result);
              }
            }
            break;
          }
        case 'INPUT':
          {
            if (element.hasAttribute('md-datepicker')) {
              if (!(element.hasAttribute('data-show-errortext') && element.getAttribute('data-show-errortext') === 'false')) {
                this.addMessage(element.parentNode, result);
              }
            }
            break;
          }
        default:
          break;
      }
    };

    MaterializeFormValidationRenderer.prototype.remove = function remove(element, result) {
      if (result.valid) {
        return;
      }
      switch (element.tagName) {
        case 'MD-INPUT':
          {
            this.removeMessage(element, result);
            break;
          }
        case 'SELECT':
          {
            var selectWrapper = element.closest('.select-wrapper');
            if (!selectWrapper) {
              return;
            }

            if ($(selectWrapper.parentElement).children().hasClass('md-input-validation')) {
              this.removeMessage(selectWrapper.parentElement, result);
            } else {
              this.removeMessage(selectWrapper, result);
            }
            break;
          }
        case 'INPUT':
          {
            if (element.hasAttribute('md-datepicker')) {
              this.removeMessage(element.parentNode, result);
            }
            break;
          }
        default:
          break;
      }
    };

    MaterializeFormValidationRenderer.prototype.addMessage = function addMessage(element, result) {
      var message = document.createElement('div');
      message.id = 'md-input-validation-' + result.id;
      message.textContent = result.message;
      message.className = this.className;
      if (element.querySelectorAll('.' + this.className).length === 0) {
        message.className += ' ' + this.classNameFirst;
      }
      message.style.opacity = 0;
      element.appendChild(message, element.nextSibling);
      window.getComputedStyle(message).opacity;
      message.style.opacity = 1;
    };

    MaterializeFormValidationRenderer.prototype.removeMessage = function removeMessage(element, result) {
      var message = element.querySelector('#md-input-validation-' + result.id);
      if (message) {
        element.removeChild(message);
      }
    };

    return MaterializeFormValidationRenderer;
  }();
});
define('aurelia-materialize-bridge/waves/waves',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MdWaves = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var MdWaves = exports.MdWaves = (_dec = (0, _aureliaTemplating.customAttribute)('md-waves'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec4 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec5 = (0, _aureliaTemplating.bindable)({
    defaultBindingMode: _aureliaBinding.bindingMode.oneTime
  }), _dec(_class = _dec2(_class = (_class2 = function () {
    function MdWaves(element) {
      _classCallCheck(this, MdWaves);

      _initDefineProp(this, 'block', _descriptor, this);

      _initDefineProp(this, 'circle', _descriptor2, this);

      _initDefineProp(this, 'color', _descriptor3, this);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    MdWaves.prototype.attached = function attached() {
      var classes = ['waves-effect'];
      if ((0, _attributes.getBooleanFromAttributeValue)(this.block)) {
        classes.push('waves-block');
      }
      if ((0, _attributes.getBooleanFromAttributeValue)(this.circle)) {
        classes.push('waves-circle');
      }
      if (this.color) {
        classes.push('waves-' + this.color);
      }

      this.attributeManager.addClasses(classes);
      Waves.attach(this.element);
    };

    MdWaves.prototype.detached = function detached() {
      var classes = ['waves-effect', 'waves-block'];
      if (this.color) {
        classes.push('waves-' + this.color);
      }

      this.attributeManager.removeClasses(classes);
    };

    return MdWaves;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'block', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'circle', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec5], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('aurelia-materialize-bridge/config-builder',['exports', './dropdown/dropdown-fix'], function (exports, _dropdownFix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ConfigBuilder = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ConfigBuilder = exports.ConfigBuilder = function () {
    function ConfigBuilder() {
      _classCallCheck(this, ConfigBuilder);

      this.useGlobalResources = true;
      this.useScrollfirePatch = false;
      this.globalResources = [];
    }

    ConfigBuilder.prototype.useAll = function useAll() {
      return this.useAutoComplete().useBadge().useBox().useBreadcrumbs().useButton().useCard().useCarousel().useCharacterCounter().useCheckbox().useChip().useCollapsible().useCollection().useColors().useDatePicker().useDropdown().useFab().useFile().useFooter().useInput().useModal().useNavbar().usePagination().useParallax().useProgress().usePushpin().useRadio().useRange().useScrollfire().useScrollSpy().useSelect().useSidenav().useSlider().useSwitch().useTabs().useTooltip().useTransitions().useWaves().useWell();
    };

    ConfigBuilder.prototype.useAutoComplete = function useAutoComplete() {
      this.globalResources.push('./autocomplete/autocomplete');
      return this;
    };

    ConfigBuilder.prototype.useBadge = function useBadge() {
      this.globalResources.push('./badge/badge');
      return this;
    };

    ConfigBuilder.prototype.useBox = function useBox() {
      this.globalResources.push('./box/box');
      return this;
    };

    ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
      this.globalResources.push('./breadcrumbs/breadcrumbs');
      return this;
    };

    ConfigBuilder.prototype.useButton = function useButton() {
      this.globalResources.push('./button/button');
      return this;
    };

    ConfigBuilder.prototype.useCarousel = function useCarousel() {
      this.globalResources.push('./carousel/carousel');
      this.globalResources.push('./carousel/carousel-item');
      return this;
    };

    ConfigBuilder.prototype.useCharacterCounter = function useCharacterCounter() {
      this.globalResources.push('./char-counter/char-counter');
      return this;
    };

    ConfigBuilder.prototype.useCard = function useCard() {
      this.globalResources.push('./card/card');
      return this;
    };

    ConfigBuilder.prototype.useCheckbox = function useCheckbox() {
      this.globalResources.push('./checkbox/checkbox');
      return this;
    };

    ConfigBuilder.prototype.useChip = function useChip() {
      this.globalResources.push('./chip/chip');
      this.globalResources.push('./chip/chips');
      return this;
    };

    ConfigBuilder.prototype.useClickCounter = function useClickCounter() {
      this.globalResources.push('./click-counter');
      return this;
    };

    ConfigBuilder.prototype.useCollapsible = function useCollapsible() {
      this.globalResources.push('./collapsible/collapsible');
      return this;
    };

    ConfigBuilder.prototype.useCollection = function useCollection() {
      this.globalResources.push('./collection/collection');
      this.globalResources.push('./collection/collection-item');
      this.globalResources.push('./collection/collection-header');
      this.globalResources.push('./collection/md-collection-selector');
      return this;
    };

    ConfigBuilder.prototype.useColors = function useColors() {
      this.globalResources.push('./colors/md-colors');
      return this;
    };

    ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
      this.globalResources.push('./datepicker/datepicker');
      return this;
    };

    ConfigBuilder.prototype.useDropdown = function useDropdown() {
      this.globalResources.push('./dropdown/dropdown');
      return this;
    };

    ConfigBuilder.prototype.useDropdownFix = function useDropdownFix() {
      (0, _dropdownFix.applyMaterializeDropdownFix)();
      return this;
    };

    ConfigBuilder.prototype.useFab = function useFab() {
      this.globalResources.push('./fab/fab');
      return this;
    };

    ConfigBuilder.prototype.useFile = function useFile() {
      this.globalResources.push('./file/file');
      return this;
    };

    ConfigBuilder.prototype.useFooter = function useFooter() {
      this.globalResources.push('./footer/footer');
      return this;
    };

    ConfigBuilder.prototype.useInput = function useInput() {
      this.globalResources.push('./input/input');
      this.globalResources.push('./input/input-prefix');
      return this;
    };

    ConfigBuilder.prototype.useModal = function useModal() {
      this.globalResources.push('./modal/modal');
      this.globalResources.push('./modal/modal-trigger');
      return this;
    };

    ConfigBuilder.prototype.useNavbar = function useNavbar() {
      this.globalResources.push('./navbar/navbar');
      return this;
    };

    ConfigBuilder.prototype.usePagination = function usePagination() {
      this.globalResources.push('./pagination/pagination');
      return this;
    };

    ConfigBuilder.prototype.useParallax = function useParallax() {
      this.globalResources.push('./parallax/parallax');
      return this;
    };

    ConfigBuilder.prototype.useProgress = function useProgress() {
      this.globalResources.push('./progress/progress');
      return this;
    };

    ConfigBuilder.prototype.usePushpin = function usePushpin() {
      this.globalResources.push('./pushpin/pushpin');
      return this;
    };

    ConfigBuilder.prototype.useRadio = function useRadio() {
      this.globalResources.push('./radio/radio');
      return this;
    };

    ConfigBuilder.prototype.useRange = function useRange() {
      this.globalResources.push('./range/range');
      return this;
    };

    ConfigBuilder.prototype.useScrollfire = function useScrollfire() {
      this.globalResources.push('./scrollfire/scrollfire');
      this.globalResources.push('./scrollfire/scrollfire-target');
      return this;
    };

    ConfigBuilder.prototype.useScrollSpy = function useScrollSpy() {
      this.globalResources.push('./scrollspy/scrollspy');
      return this;
    };

    ConfigBuilder.prototype.useSelect = function useSelect() {
      this.globalResources.push('./select/select');
      return this;
    };

    ConfigBuilder.prototype.useSidenav = function useSidenav() {
      this.globalResources.push('./sidenav/sidenav');
      this.globalResources.push('./sidenav/sidenav-collapse');
      return this;
    };

    ConfigBuilder.prototype.useSlider = function useSlider() {
      this.globalResources.push('./slider/slider');

      return this;
    };

    ConfigBuilder.prototype.useSwitch = function useSwitch() {
      this.globalResources.push('./switch/switch');
      return this;
    };

    ConfigBuilder.prototype.useTabs = function useTabs() {
      this.globalResources.push('./tabs/tabs');
      return this;
    };

    ConfigBuilder.prototype.useTooltip = function useTooltip() {
      this.globalResources.push('./tooltip/tooltip');
      return this;
    };

    ConfigBuilder.prototype.useTransitions = function useTransitions() {
      this.globalResources.push('./transitions/fadein-image');
      this.globalResources.push('./transitions/staggered-list');
      return this;
    };

    ConfigBuilder.prototype.useWaves = function useWaves() {
      this.globalResources.push('./waves/waves');
      return this;
    };

    ConfigBuilder.prototype.useWell = function useWell() {
      this.globalResources.push('./well/md-well.html');
      return this;
    };

    ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
      this.useGlobalResources = false;
      return this;
    };

    ConfigBuilder.prototype.withScrollfirePatch = function withScrollfirePatch() {
      this.useScrollfirePatch = true;
      return this;
    };

    return ConfigBuilder;
  }();
});
define('aurelia-materialize-bridge/common/polyfills',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.polyfillElementClosest = polyfillElementClosest;
  function polyfillElementClosest() {
    if (typeof Element.prototype.matches !== 'function') {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
        var element = this;
        var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
        var index = 0;

        while (elements[index] && elements[index] !== element) {
          ++index;
        }
        return Boolean(elements[index]);
      };
    }

    if (typeof Element.prototype.closest !== 'function') {
      Element.prototype.closest = function closest(selector) {
        var element = this;

        while (element && element.nodeType === 1) {
          if (element.matches(selector)) {
            return element;
          }

          element = element.parentNode;
        }
        return null;
      };
    }
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><md-colors md-primary-color.bind=primaryColor md-accent-color.bind=accentColor md-error-color.bind=errorColor></md-colors><app-colors primary-color.bind=primaryColor accent-color.bind=accentColor></app-colors><require from=./navigation/nav-bar></require><require from=./authentication/login></require><require from=./authentication/register></require><loading-indicator></loading-indicator><header><nav-bar></nav-bar></header><login></login><register></register><div class=page-host><router-view></router-view></div><footer></footer></template>"; });
define('text!about/about.html', ['module'], function(module) { module.exports = "<template><section id=about class=container><h2 class=center-align>За приложението</h2><hr><p class=center-align>Приложение за трз, в процес на разработка.</p></section><footer id=footer class=container><div class=center-align>© Вангел Христов 2017</div></footer></template>"; });
define('text!authentication/login.html', ['module'], function(module) { module.exports = "<template><div class=container><div class=row><div id=login class=\"col s4 offset-s2\" md-modal=\"dismissible: false;\"><div class=modal-content><div><md-input md-type=email md-label=Имейл md-validate=true md-validate-error=\"Невалиден имейл\" md-value.bind=email></md-input><br></div><div><md-input md-type=password md-label=Парола md-value.bind=password></md-input><br></div></div><div class=modal-footer><a md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Затвори</a><a md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Влез</a></div></div></div></div></template>"; });
define('text!authentication/register.html', ['module'], function(module) { module.exports = "<template><div class=container><div class=row><div id=register class=\"col s4 offset-s2\" md-modal=\"dismissible: false;\"><div class=modal-content><div><md-input md-type=email md-label=Имейл md-validate=true md-validate-error=\"Невалиден имейл\" md-value.one-time=email></md-input><br></div><div><md-input md-type=password md-label=Парола md-value.one-time=password></md-input><br></div><div><md-input md-type=password md-label=\"Потвърди паролата\" md-value.one-time=passwordRepeat></md-input><br></div></div><div class=modal-footer><a md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Затвори</a><a click.delegate=register() md-button=\"flat: true;\" md-waves=\"color: accent;\" class=\"modal-action modal-close\">Регистрирай се</a></div></div></div></div></template>"; });
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
define('text!help/help.html', ['module'], function(module) { module.exports = "<template><section class=container><div><p class=center-align>Документация на продукта</p></div></section></template>"; });
define('text!navigation/breadcrumbs.html', ['module'], function(module) { module.exports = "<template><md-breadcrumbs></md-breadcrumbs></template>"; });
define('text!navigation/nav-bar.html', ['module'], function(module) { module.exports = "<template><md-navbar><a href=#/about class=\"hide-on-small-and-down left brand-logo\"><span>ТРЗ</span></a><ul class=right><li md-waves show.bind=!user.isLoggedIn><a href=#register>Регистрация</a></li><li md-waves show.bind=!user.isLoggedIn><a href=#login>Вход</a></li><li md-waves><a href=#/help>Помощ</a></li><li md-waves show.bind=user.isLoggedIn><a click.delegate=user.logOut()>Изход</a></li></ul></md-navbar></template>"; });
define('text!navigation/side-menu.html', ['module'], function(module) { module.exports = "<template><div class=\"col m4\"><div md-pushpin=\"top: 320; offset: 150;\"><md-card md-title=Меню><div><div class=actions><a md-button md-dropdown=\"activates: companies; below-origin: true; constrain-width: false;in-duration: 1000;\">&nbsp; Фирми&nbsp;</a></div><div class=actions><a md-button md-dropdown=\"activates: export; below-origin: true; constrain-width: false;in-duration: 1000;\">Експорт</a></div><ul id=companies><li><a route-href=\"route: companies\">Покажи всички</a></li><li class=divider></li><li><a route-href=\"route: companies/add-new\">Запиши нова</a></li></ul><ul id=export><li><a route-href=\"route: exports/declaration-1\">Декларация образец 1</a></li><li class=divider></li><li><a route-href=\"route: exports/declaration-6\">Декларация образец 6</a></li><li class=divider></li><li><a route-href=\"route: exports/notice-62\">Уведомление по чл. 62</a></li><li class=divider></li><li><a route-href=\"route: exports/noi-file\">Файл за НОИ</a></li></ul></div></md-card></div></div></template>"; });
define('text!not-found/not-found.html', ['module'], function(module) { module.exports = "<template><h1>Грешка</h1><p>Страницата която търсите не съществува</p></template>"; });
//# sourceMappingURL=app-bundle.js.map