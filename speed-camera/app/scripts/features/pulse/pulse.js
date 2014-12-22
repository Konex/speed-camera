'use strict';

var pulse = angular.module('pulse', [
]);

pulse.config([
	'$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('tab.pulse', {
      url: '/pulse',
      views: {
        'pulse-tab': {
          templateUrl: 'templates/features/pulse/pulse.html'
        }
      }
    })	
}]);