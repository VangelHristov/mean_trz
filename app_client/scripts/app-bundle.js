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

    var App = exports.App = function App() {
        _classCallCheck(this, App);

        this.message = 'Hello World!';
        this.primaryColor = '#78909C';
        this.accentColor = '#1de9b6';
        this.errorColor = '#f44336';
    };
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
            return b.useAll();
        });

        aurelia.start().then(function () {
            return aurelia.setRoot();
        });
    }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <md-colors md-primary-color.bind=\"primaryColor\" md-accent-color.bind=\"accentColor\" md-error-color.bind=\"errorColor\"></md-colors>\n\n    <md-navbar>\n        <span class=\"brand-logo\">MEAN TRZ</span>\n        <ul class=\"hide-on-med-and-down right\">\n            <li md-waves class=\"active\"><a>Вход</a></li>\n            <li md-waves><a>Регистрация</a></li>\n            <li md-waves><a>Изход</a></li>\n        </ul>\n    </md-navbar>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map