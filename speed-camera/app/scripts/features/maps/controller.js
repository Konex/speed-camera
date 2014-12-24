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
		var res = dataAccessService.getCameras().query();
		
		res.$promise.then(function(resData) {
			if (resData && resData.value.length > 0) {
				for(var i=0, len=resData.value.length; i<len; i++) {
						var marker = {};
						marker.id = resData.value[i].id;
						marker.coords = {latitude: resData.value[i].latitude, longitude: resData.value[i].longitude};
						marker.options = {labelContent: resData.value[i].description + ' Speed Limit:' + resData.value[i].speed_limit + ' Type:' + resData.value[i].type};

						markers.push(marker);
					}
				}
		}) ;		
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


