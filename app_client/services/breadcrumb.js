/* eslint-disable default-case */
(function breadcrumbFactoryModule() {
	'use strict';

	angular
		.module('app')
		.factory('breadcrumb', [
			'$location',
			'storage',
			function breadcrumb($location, storage) {
				return {
					getAll: () => {
						let url = $location.url(),
							getCompanyData = () => {
								let result = /companies\/[0-9abcdef]{24}/.exec(
									url);

								return {
									href : `#!/${result[0]}`,
									label: storage.getCompanyName()
								};
							},
							getDossierData = () => {
								let result = /companies\/[0-9a-f]{24}\/dossiers\/[0-9a-f]{24}/.exec(
									url);
								return {
									href : `#!/${result[0]}`,
									label: storage.getDossierName()
								};
							},
							trim = (str) => {
								let
									strLen = str.length,
									trimLeft = str[0] === '/',
									trimRight = str[strLen - 1] === '/';

								if (trimLeft && trimRight) {
									return str.substring(1, strLen - 1);
								} else if (trimLeft) {
									return str.substring(1, strLen);
								} else if (trimRight) {
									return str.substring(0, strLen - 1);
								}

								return str;
							};

						url = trim(url);

						let breadcrumbs = {
							companies      : {
								href : `#!/companies`,
								label: 'Начало'
							},
							newCompany     : {
								href : `#!/${url}`,
								label: 'Нова фирма'
							},
							newDossier     : {
								href : `#!/${url}`,
								label: 'Ново досие'
							},
							newWorkContract: {
								href: `#!/${url}`

							}
						};

						switch (url.split('/').length) {
							case 1:
								return [breadcrumbs.companies];
							case 2:
								return /add-new/.test(url)
									? [
										breadcrumbs.companies,
										breadcrumbs.newCompany
									]
									: [breadcrumbs.companies, getCompanyData()];
							case 4:
								return /add-new/.test(url)
									? [
										breadcrumbs.companies,
										getCompanyData(),
										breadcrumbs.newDossier
									]
									: [
										breadcrumbs.companies,
										getCompanyData(),
										getDossierData()
									];
							case 6:
								return [
									breadcrumbs.companies,
									getCompanyData(),
									getDossierData(),
									breadcrumbs.newWorkContract
								];
						}
					}
				};
			}
		]);
}());