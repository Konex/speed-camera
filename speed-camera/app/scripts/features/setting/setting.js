'use strict';

var setting = angular.module('setting', [
]);

setting.config([
	'$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('tab.setting', {
      url: '/setting',
      views: {
        'setting-tab': {
          templateUrl: 'templates/features/setting/setting.html'
        }
      }
    })	
}]);