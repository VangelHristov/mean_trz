(function () {
    'use strict';

    angular
      .module('app')
      .factory('breadcrumbs', ['$location', 'storage', function ($location, storage) {
          return {
              getAll: () => {
                  let url = $location.url(),
                    companyName = storage.getCompanyName(),
                    dossierName = storage.getDossierName(),
                    getCompanyData = () => {
                        let result = /companies\/[0-9abcdef]{24}/.exec(url);

                        return {
                            href : `#!/${result[0]}`,
                            label: companyName
                        };
                    },
                    getDossierData = () => {
                        let result = /companies\/[0-9a-f]{24}\/dossiers\/[0-9a-f]{24}/.exec(url);
                        return {
                            href : `#!/${result[0]}`,
                            label: dossierName
                        };
                    },
                    trim = (str) => {
                        let
                          strLen = str.length,
                          trimLeft = str[0] === '/',
                          trimRight = str[strLen - 1] === '/';

                        if (trimLeft && trimRight) {
                            return str.substring(1, strLen - 2);
                        } else if (trimLeft) {
                            return str.substring(1, strLen - 1);
                        } else if (trimRight) {
                            return str.substring(0, strLen - 2);
                        }

                        return str;
                    };

                  url = trim(url);

                  let breadcrumbs = {
                      companies      : {
                          href : `#!/${url}`,
                          label: 'Начало'
                      },
                      newCompany     : {
                          href : `#!/${url}`,
                          label: 'Добави фирма'
                      },
                      newDossier     : {
                          href : `#!/${url}`,
                          label: companyName
                      },
                      newWorkContract: {
                          href: `#!/${url}`,

                      }
                  };

                  switch (url.split('/').length) {
                      case 1:
                          return [breadcrumbs.companies];
                      case 2:
                          return url.test(/add-new/)
                            ? [breadcrumbs.companies, breadcrumbs.newCompany]
                            : [breadcrumbs.companies, getCompanyData()];
                      case 4:
                          return url.test(/add-new/)
                            ? [breadcrumbs.companies, getCompanyData(), breadcrumbs.newDossier]
                            : [breadcrumbs.companies, getCompanyData(), getDossierData()];
                      case 6:
                          return [breadcrumbs.companies, getCompanyData(), getDossierData(), breadcrumbs.newWorkContract];
                  }
              }
          };
      }]);
}());