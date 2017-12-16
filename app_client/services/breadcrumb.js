(function breadcrumbFactoryModule() {
	'use strict';

	angular
		.module('app')
		.factory('breadcrumb', [
			'$location',
			'storage',
			function breadcrumb($location, storage) {
				const trim = function (str) {
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

				const companyDetails = function (url) {
					let result = /companies\/[0-9abcdef]{24}/
						.exec(url);

					return {
						href : `#!/${result[0]}`,
						label: storage.getCompanyName()
					};
				};

				const dossierDetails = function (url) {
					let result = /companies\/[0-9a-f]{24}\/dossiers\/[0-9a-f]{24}/
						.exec(url);

					return {
						href : `#!/${result[0]}`,
						label: storage.getDossierName()
					};
				};

				const newDossier = function (url) {
					return {href: `#!/${url}`, label: 'Ново досие'};
				};

				const newContract = function (url) {
					return {href: `#!/${url}`, label: 'Нов договор'};
				};

				const newCompany = function (url) {
					return {href: `#!/${url}`, label: 'Нова фирма'};
				};

				const start = function () {
					return {href: '#!/companies', label: 'Начало'};
				};

				return function getBreadcrumbs() {
					let url = trim($location.url());

					switch (url.split('/').length) {
						case 1:
							return [start()];
						case 2:
							return /add-new/.test(url)
								? [
									start(),
									newCompany(url)
								]
								: [
									start(),
									companyDetails(url)
								];
						case 4:
							return /add-new/.test(url)
								? [
									start(),
									companyDetails(url),
									newDossier(url)
								]
								: [
									start(),
									companyDetails(url),
									dossierDetails(url)
								];
						case 5:
							return [
								start(),
								companyDetails(url),
								dossierDetails(url),
								newContract(url)
							];
						default:
							return [];
					}
				};
			}
		]);
}());