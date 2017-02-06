import environment from './environment';

//Configure Bluebird Promises.
Promise.config({
    warnings: {
        wForgottenReturn: false
    }
});

export function configure(aurelia) {
    aurelia.use
           .standardConfiguration()
           .feature('resources');

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll().useDropdownFix());
    aurelia.use.plugin('aurelia-fetch-client');
    aurelia.start().then(() => aurelia.setRoot());
}
