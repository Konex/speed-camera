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





var currentLocationMarker = {};
(function () {

	function buildCurrentLocationMarker($scope) {

		if (!_.isUndefined($scope.currentPosition) && !_.isEmpty($scope.currentPosition)) {
			$scope.currentLocationMarker = {
				id: 0,
				coords: {latitude: $scope.currentPosition.lat, longitude: $scope.currentPosition.lng}
			};
		}
	}

	currentLocationMarker.buildCurrentLocationMarker = buildCurrentLocationMarker;
})();






var currentLocation = {};
(function (){

	var $scope, $cordovaGeolocation, $ionicPlatform, watch;

	function init(_$scope, _$cordovaGeolocation, _$ionicPlatform) {
		$scope              = _$scope;
		$cordovaGeolocation = _$cordovaGeolocation;
		$ionicPlatform      = _$ionicPlatform;
	}

	function getCurrentLocation() {
		$ionicPlatform.ready(function() {
			var currentPosition = {};
			var posOptions = {timeout: 10000, enableHighAccuracy: false};

		  	$cordovaGeolocation
			    .getCurrentPosition(posOptions)
			    .then(function (position) {
			      currentPosition.lat  = position.coords.latitude
			      currentPosition.lng  = position.coords.longitude
			    }, function(err) {
		      		// error
		    	}
	    	);

		    $scope.currentPosition = currentPosition;
		});
	}

	function watchCurrentLocation() {
		$ionicPlatform.ready(function() {
			var watchOptions = {
	    		frequency :         1000,
	    		timeout :           3000,
	    		enableHighAccuracy: false // may cause errors if true
	  		};

		  	watch = $cordovaGeolocation.watchPosition(watchOptions);
		  	watch.then(
		    	null,
			    function(err) {
			      // error
			    },
			    function(position) {
		      		$scope.currentPosition.latitude  = position.coords.latitude
			      	$scope.currentPosition.longitude  = position.coords.longitude

			      	currentLocationMarker.buildCurrentLocationMarker($scope);
			  	} 
		  	);
		});
	}

	function clearWatch() {
		$ionicPlatform.ready(function() {
			if (!_.isUndefined(watch))
				watch.clearWatch();
		});
	}

	currentLocation.init = init;
	currentLocation.getCurrentLocation = getCurrentLocation;
	currentLocation.watchCurrentLocation = watchCurrentLocation; 
	currentLocation.clearWatch = clearWatch;
})();






var ui = {};
(function (){
	var $scope, $log, $ionicSideMenuDelegate;

	function init(_$scope, _$log, _$ionicSideMenuDelegate) {
		$scope = _$scope;
		$log = _$log;
		$ionicSideMenuDelegate = _$ionicSideMenuDelegate;
		
		setDefaults();
		wireHandlers();
	}

	function setDefaults() {
		$scope.toggleLeft = function() {
	    	$ionicSideMenuDelegate.toggleLeft();
	  	};

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
	'$ionicPlatform',
	'$cordovaGeolocation',
	'DataAccessService',
	'_',

	function($scope, $log, $timeout, uiGmapGoogleMapApi, $ionicSideMenuDelegate, $ionicPlatform, $cordovaGeolocation, dataAccessService, _) {		
		uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = { center: { latitude: -36.849562, longitude: 174.764876 }, zoom: 9 };
	    }); 

	    currentLocation.init($scope, $cordovaGeolocation, $ionicPlatform);
		currentLocation.getCurrentLocation();
	    currentLocation.watchCurrentLocation();

	    currentLocationMarker.buildCurrentLocationMarker($scope);
	    cameraMarkers.init($scope, dataAccessService, _);
		cameraMarkers.getCameraMarkers();

		ui.init($scope, $log, $ionicSideMenuDelegate);
	}
]);


