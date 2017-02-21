(function () {
    'use strict';

    angular
      .module('app')
      .factory('storage', ['core', function (core) {
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
              let storageData = core.$window.localStorage.getItem(dataItemName) || '{}';
              storageData     = escapeHtml(storageData);
              return prop ? JSON.parse(storageData)[prop] : JSON.parse(storageData);
          }

          function setData(prop, val) {
              let data   = getData() || {};
              data[prop] = val;
              core.$window.localStorage.setItem(dataItemName, JSON.stringify(data));
          }

          return {
              getToken     : () => getData('token'),
              setToken     : (token) => setData('token', token),
              geUsertId    : () => getData('userId'),
              setUserId    : (id) => setData('userId', id),
              getCompanyId : () => getData('companyId'),
              setCompanyId : (id) => setData('companyId', id),
              removeAllData: () => core.$window.localStorage.removeItem(dataItemName)
          };
      }]);
}());