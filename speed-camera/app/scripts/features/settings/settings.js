'use strict';

var settings = angular.module('settings', [
  'settings.controller'
]);

settings.config([
	'$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('tab.settings', {
      url: '/settings',
      views: {
        'settings-tab': {
          templateUrl: 'templates/features/settings/settings.html',
          controller:  'SettingsCtrl'
        }
      }
    })	
}]);