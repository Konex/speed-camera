'use strict';
var mapsController = angular.module('maps.controller', [
]);



var cameraMarkers = {};
(function () {
	var dataAccessService;

	function init(_dataAccessService) {
		dataAccessService = _dataAccessService;
	}

	function getAllCameraMarkers() {
		var markers = [];
		
		dataAccessService.getCameras('test.json').then(
			function(data) {
				for(var i=0, len=data.value.length; i<len; i++) {
					var marker = {};
					marker.id = data.value[i].id;
					marker.coords = {latitude: data.value[i].latitude, longitude: data.value[i].longitude};
					marker.options = {labelContent: data.value[i].description + ' Speed Limit:' + data.value[i].speed_limit + ' Type:' + data.value[i].type};

					markers.push(marker);
				}
			},
			function() {
				// error
			}
		);

		return markers;
	}


	cameraMarkers.init = init;
	cameraMarkers.getAllCameraMarkers = getAllCameraMarkers;

})();









mapsController.controller('MapsCtrl', [
	'$scope',
	'uiGmapGoogleMapApi',
	'$ionicSideMenuDelegate',
	'DataAccessService',

	function($scope, uiGmapGoogleMapApi, $ionicSideMenuDelegate, dataAccessService) {

		cameraMarkers.init(dataAccessService);
		$scope.markers = cameraMarkers.getAllCameraMarkers();

		$scope.toggleLeft = function() {
	    	$ionicSideMenuDelegate.toggleLeft();
	  	};

		uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = { center: { latitude: -36.849837, longitude: 174.761099 }, zoom: 9 };
	    });  
	}
]);


