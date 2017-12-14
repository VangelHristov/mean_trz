(function localStorageFactoryModule() {
	'use strict';

	angular
		.module('app')
		.factory(
			'storage',
			[
				'$window',
				function storageFactory($window) {
					const tokenId = 'sajkdhf789541239h48f213jt4982h5g20598hjd';
					const companyId = '83jfr7wo54hg584we87546b564082307r54gt5429';
					const dossierId = '048mx9psabv3780y2xmpq4yuty590h310748y27t0';

					const get = function (item) {
						return $window.localStorage.getItem(item);
					};
					const set = function (item, value) {
						return $window.localStorage.setItem(item, value);
					};
					const remove = function (item) {
						return $window.localStorage.removeItem(item);
					};

					const getPayload = function () {
						let token = get(tokenId);
						let payload = null;

						if (token !== null) {
							payload = JSON.parse($window.atob(token.split('.')[1]));
						}

						return payload;
					};

					const isLoggedIn = function () {
						let payload = getPayload();

						if (payload) {
							return payload.exp > Date.now() / 1000;
						}

						return false;
					};

					const removeAllData = function () {
						remove(tokenId);
						remove(companyId);
						remove(dossierId);
					};

					return {
						isLoggedIn    : isLoggedIn,
						removeAllData : removeAllData,
						getToken      : () => get(tokenId),
						setToken      : (value) => set(tokenId, value),
						getUserId     : () => getPayload()._id,
						getCompanyName: () => get(companyId),
						setCompanyName: (value) => set(companyId, value),
						getDossierName: () => get(dossierId),
						setDossierName: (value) => set(dossierId, value)
					};
				}
			]
		);
}());