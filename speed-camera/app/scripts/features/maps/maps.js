'use strict';

var maps = angular.module('maps', [
	'uiGmapgoogle-maps',
	'maps.controller'
]);

maps.config([
	'$stateProvider',
    '$urlRouterProvider',
    'uiGmapGoogleMapApiProvider',
    function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

    	uiGmapGoogleMapApiProvider.configure({
	        key: '',
	        v: '3.17',
	        libraries: 'weather,geometry,visualization'
    	});

		$stateProvider
		.state('tab.maps', {
				url: '/maps',
				views: {
				'maps-tab': {
	  				templateUrl: 'templates/features/maps/maps.html',
	  				controller: 'MapsCtrl'
				}
			}
		});    	
}]);