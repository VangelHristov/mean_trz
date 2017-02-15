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
            dataItemName  = 'TRZ_USER_DATA';

          function replaceTag(tag) {
              return tagsToReplace[tag] || tag;
          }

          function escapeHtml(str) {
              return str.replace(/[<>]/g, replaceTag);
          }

          function getData(prop) {
              let storageData = $window.localStorage.getItem(dataItemName) || '{}';
              storageData     = escapeHtml(storageData);
              return prop ? JSON.parse(storageData)[prop] : JSON.parse(storageData);
          }

          function setData(prop, val) {
              let data   = getData() || {};
              data[prop] = val;
              $window.localStorage.setItem(dataItemName, JSON.stringify(data));
          }

          return {
              getToken     : () => getData('token'),
              setToken     : (token) => setData('token', token),
              getId        : () => getData('id'),
              setId        : (id) => setData('id', id),
              removeAllData: () => $window.localStorage.removeItem(dataItemName)
          };
      }]);
}());