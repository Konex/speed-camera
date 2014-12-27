'use strict';
var mapsController = angular.module('maps.controller', [
]);






var cameraMarkers = {};
(function () {
	var $scope, dataAccessService, _;

	function init(_$scope, _dataAccessService, _loDash) {
		$scope = _$scope;
		dataAccessService = _dataAccessService;
		_ = _loDash;
		$scope.cameraMarkers = [];
	}

	function getCameraMarkers() {
		dataAccessService.getCameras('australia/speed-camera-au.json')
		.then(function(data) {
			var markers = [];
			setMarkers(markers, data);
			$scope.cameraMarkers = markers;
		}, function(error) {
			// error
		});
	}

	function setMarkers(markers, data) {	
		angular.forEach(data.value, function(item) {
			markers.push(buildMarker(item));	
		});
	}

	function buildMarker(markerItem) {
		var marker = {
			id: markerItem.id, 
			latitude: markerItem.latitude, 
			longitude: markerItem.longitude,
			show: false,
			description: buildMarkerDescription(markerItem)
		};

		marker.onClicked = function() {
			marker.show = !marker.show;
		};

		return marker;		
	} 

	function buildMarkerDescription(markerItem) {
		var description = '';
		
		if (markerItem && !_.isUndefined(markerItem)) {
			if (!_.isUndefined(markerItem.speed_limit))
				description += 'Speed Limit: ' + markerItem.speed_limit + '\r\n';

			if (!_.isUndefined(markerItem.type))
				description += markerItem.type + ' camera';
		}

		if (_.isEmpty(description))
			description = 'Sorry we can\'t find anything about this camera.';

		return description;
	}

	cameraMarkers.init = init;
	cameraMarkers.getCameraMarkers = getCameraMarkers;

})();


var ui ={};
(function (){
	var $scope, $log, $timeout;

	function init(_$scope, _$log, _$timeout) {
		$scope = _$scope;
		$log = _$log;
		$timeout = _$timeout;

		setDefaults();
		wireHandlers();
	}

	function setDefaults() {
		$scope.weatherOnOff = {text: 'Weather', checked: false};
		$scope.trafficOnOff = {text: 'Traffic', checked: false};
	}

	function wireHandlers() {
		
	}

	ui.init = init;
})();



mapsController.controller('MapsCtrl', [
	'$scope',
	'$log',
	'$timeout',
	'uiGmapGoogleMapApi',
	'$ionicSideMenuDelegate',
	'DataAccessService',
	'_',

	function($scope, $log, $timeout, uiGmapGoogleMapApi, $ionicSideMenuDelegate, dataAccessService, _) {
		$scope.toggleLeft = function() {
	    	$ionicSideMenuDelegate.toggleLeft();
	  	};

		uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = { center: { latitude: -34.932504, longitude: 138.597585 }, zoom: 9 };
	    }); 

	    cameraMarkers.init($scope, dataAccessService, _);
		cameraMarkers.getCameraMarkers();

		ui.init($scope, $log, $timeout);
	}
]);


