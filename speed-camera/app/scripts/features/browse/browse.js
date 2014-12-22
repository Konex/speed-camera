'use strict';

var browse = angular.module('browse', [
]);

browse.config([
	'$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('tab.browse', {
      url: '/browse',
      views: {
        'browse-tab': {
          templateUrl: 'templates/features/browse/browse.html'
        }
      }
    })	
}]);