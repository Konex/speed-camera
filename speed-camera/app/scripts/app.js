'use strict';

var mars = angular.module('Mars', [
    'ionic', 
    'config',
    'applicationController',
    'common.security',
    'signin', 
    'maps',
    'pulse',
    'browse'
]);



mars.run(['$ionicPlatform',

    function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
}]);


mars.factory('_', [
    '$window',
    function($window) {
        // place lodash include before angular
        return $window._;
    }
]);



mars.run([
    '$rootScope',
    '$window', 

    function ($rootScope, $window) {
        $rootScope._ = $window._;
}]);


mars.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        });

    $urlRouterProvider.otherwise('/tab/maps');
}]);

