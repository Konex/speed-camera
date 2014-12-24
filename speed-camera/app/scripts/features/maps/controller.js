'use strict';
var mapsController = angular.module('maps.controller', [
]);



var cameraMarkers = {};
(function () {
	var $scope, dataAccessService;

	function init(_$scope, _dataAccessService) {
		$scope = _$scope;
		dataAccessService = _dataAccessService;
		$scope.cameraMarkers = [];
	}

	function getCameraMarkers() {
		dataAccessService.getCameras('australia/speed-camera-au.json')
		.then(function(data) {
			var markers = [];
			for(var i=0, len=data.value.length; i<len; i++) {
				var marker = {id: data.value[i].id, latitude: data.value[i].latitude, longitude: data.value[i].longitude};
				//marker.options = {labelContent: data.value[i].description + ' Speed Limit:' + data.value[i].speed_limit + ' Type:' + data.value[i].type};
				markers.push(marker);
			}

			$scope.cameraMarkers = markers;
		}, function(error) {
			// error
		});
	}


	cameraMarkers.init = init;
	cameraMarkers.getCameraMarkers = getCameraMarkers;

})();









mapsController.controller('MapsCtrl', [
	'$scope',
	'uiGmapGoogleMapApi',
	'$ionicSideMenuDelegate',
	'DataAccessService',

	function($scope, uiGmapGoogleMapApi, $ionicSideMenuDelegate, dataAccessService) {
		$scope.toggleLeft = function() {
	    	$ionicSideMenuDelegate.toggleLeft();
	  	};

		uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = { center: { latitude: -34.932504, longitude: 138.597585 }, zoom: 9 };
	    }); 

	    cameraMarkers.init($scope, dataAccessService);
		cameraMarkers.getCameraMarkers();
	}
]);


