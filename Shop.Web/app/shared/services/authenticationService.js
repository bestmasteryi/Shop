﻿(function (app) {
    'use strict';
    app.service('authenticationService', ['$http', '$q', '$window', 'localStorageService', 'authData',
        function ($http, $q, $window, localStorageService, authData) {
            var tokenInfo;

            this.setTokenInfo = function (data) {
                tokenInfo = data;
                localStorageService.set("TokenInfoClient", JSON.stringify(tokenInfo));
            }

            this.getTokenInfo = function () {
                return tokenInfo;
            }

            this.removeToken = function () {
                tokenInfo = null;
                localStorageService.set("TokenInfoClient", null);
            }

            this.init = function () {
                var tokenInfo = localStorageService.get("TokenInfoClient");
                if (tokenInfo) {
                    tokenInfo = JSON.parse(tokenInfo);
                    authData.authenticationData.IsAuthenticated = true;
                    authData.authenticationData.userName = tokenInfo.userName;
                    authData.authenticationData.fullName = tokenInfo.fullName;
                    authData.authenticationData.accessToken = tokenInfo.accessToken;

                }
            }

            this.setHeader = function () {
                delete $http.defaults.headers.common['X-Requested-With'];
                if ((authData.authenticationData != undefined) && (authData.authenticationData.accessToken != undefined) && (authData.authenticationData.accessToken != null) && (authData.authenticationData.accessToken != "")) {
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + authData.authenticationData.accessToken;
                    $http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
                }
            }

            this.validateRequest = function () {
                var url = 'https://localhost:44353/Home/Index';
                var deferred = $q.defer();
                $http.get(url).then(function () {
                    deferred.resolve(null);
                }, function (error) {
                    deferred.reject(error);
                }).catch(function () { });
                return deferred.promise;
            }

            this.init();
        }
    ]);
})(angular.module('shop.common'));