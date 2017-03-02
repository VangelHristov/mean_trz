(function () {
    'use strict';

    angular
      .module('app')
      .factory('storage', ['$window', function ($window) {
          let
            tagsToReplace = {
                '<': '&lt;',
                '>': '&gt;'
            },
            dataItemName = 'TRZ_TOKEN';

          function replaceTag(tag) {
              return tagsToReplace[tag] || tag;
          }

          function escapeHtml(str) {
              return str.replace(/[<>]/g, replaceTag);
          }

          function getToken() {
              let token = $window.localStorage.getItem(dataItemName);
              return token ? escapeHtml(token) : false;
          }

          function setToken(token) {
              $window.localStorage.setItem(dataItemName, token);
          }

          function getPayload() {
              let token = getToken();
              return token ? JSON.parse($window.atob(token.split('.')[1])) : false;
          }

          return {
              getToken,
              setToken,
              isLoggedIn    : () => {
                  let payload = getPayload();

                  if (payload) {
                      return payload.exp > Date.now() / 1000;
                  }

                  return false;
              },
              getUserId     : () => getPayload()._id,
              removeAllData : () => $window.localStorage.removeItem(dataItemName),
              getCompanyName: () => $window.localStorage.getItem('company'),
              setCompanyName: (name) => $window.localStorage.setItem('company', name),
              getDossierName: () => $window.localStorage.getItem('dossier'),
              setDossierName: (name) => $window.localStorage.setItem('dossier', name)
          };
      }]);
}());