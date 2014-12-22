'use strict';
var mapsController = angular.module('maps.controller', []);

mapsController.controller('MapsCtrl', [
	'$scope',
	'uiGmapGoogleMapApi',

	function($scope, uiGmapGoogleMapApi) {
	// e.g. $scope.markers = [];

	uiGmapGoogleMapApi.then(function(maps) {
		$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });  
}]);