'use strict';
var mapsController = angular.module('maps.controller', [
]);


var geoPointDistance = {};
(function () {
	var rad = function(x) {
  		return x * Math.PI / 180;
	};

	// Haversine formula
	function getDistance(p1, p2) {
	  	var R     = 6378137; // Earth’s mean radius in meter
	  	var dLat  = rad(p2.latitude  - p1.latitude);
	  	var dLong = rad(p2.longitude - p1.longitude);
	  	var a     = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	    
	    Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
	    Math.sin(dLong / 2) * Math.sin(dLong / 2);
	  	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
	  	var d = R * c;
	  	
	  	return d; // returns the distance in meter
	}

	geoPointDistance.getDistance = getDistance;
})(); 


var cameraWarning = {};
(function () {
	var $scope;
	var $cordovaVibration;
	var $cordovaDialogs;
	var $cordovaToast;

	function init(_$scope, _$cordovaVibration, _$cordovaDialogs, _$cordovaToast) {
		$scope = _$scope;
		$cordovaVibration = _$cordovaVibration;
		$cordovaDialogs = _$cordovaDialogs;
		$cordovaToast = _$cordovaToast;
	}

	function warnApproachingCamera() {
		// if (!$scope.cameraMarkers || !$scope.previousPosition || !$scope.currentPosition) 
		// 	return;
		
		var nearestCamera = calcNearestCameraInWarningDistance($scope.cameraMarkers, $scope.previousPosition, $scope.currentPosition, $scope.userSettings.warningDistance);
		
		if (nearestCamera) 
			giveWarning($scope.userSettings.vibrationOnOff.checked, $scope.userSettings.soundOnOff.checked, $scope.userSettings.toastOnOff.checked);
	}

	function calcNearestCameraInWarningDistance(cameraMarkers, previousPosition, currentPosition, warningDistance) {
		var nearestCameraMarker, previousDistance, currentDistance, distanceToNearestCamera = Number.MAX_VALUE;

		_.each(cameraMarkers, function(cameraMarker) {
			var markerPosition = {latitude: cameraMarker.latitude, longitude: cameraMarker.longitude};
			currentDistance    = geoPointDistance.getDistance(currentPosition, markerPosition);
			previousDistance   = geoPointDistance.getDistance(previousPosition, markerPosition);

			if (currentDistance <= previousDistance && currentDistance < distanceToNearestCamera) {
				distanceToNearestCamera = currentDistance;
				nearestCameraMarker = angular.copy(cameraMarker);
			}

			if (distanceToNearestCamera > warningDistance)
				return false;

			return nearestCameraMarker;
		});
	}

	function giveWarning(vibrationOnOff, soundOnOff, toastOnOff) {
		if (vibrationOnOff)
			$cordovaVibration.vibrate(100);

		if (soundOnOff)
			$cordovaDialogs.beep(1);

		if (toastOnOff)
			$cordovaToast.showShortTop('Approaching Speed Camera!')
				.then(function(success) {
		  		}, function (error) {
		  		});
	}

	cameraWarning.init = init;
	cameraWarning.warnApproachingCamera = warnApproachingCamera; 
})();


var currentLocation = {};
(function (){
	var $scope, $q, $cordovaGeolocation, watch, watchOptions;

	function init(_$scope, _$q, _$cordovaGeolocation) {
		$scope = _$scope;
		$q = _$q;
		watchOptions = {
    		frequency : $scope.$parent.userSettings.gpsIntervalSecond * 1000,
    		timeout : 3000,
    		enableHighAccuracy: false // may cause errors if true
  		};
		$cordovaGeolocation = _$cordovaGeolocation;

		watch = _$cordovaGeolocation.watchPosition(watchOptions);
	}

	function getCurrentLocation() {
		var deferred = $q.defer();
		var posOptions = {timeout: 10000, enableHighAccuracy: true};

	  	$cordovaGeolocation
		    .getCurrentPosition(posOptions)
		    .then(function (position) {
		      	deferred.resolve(position);
		    }, function(err) {
	    	}
    	);
	    return deferred.promise;
	}

	function watchCurrentLocation() {
		var deferred = $q.defer();
		
	  	watch.then(
	    	null,
	    	function(err) {
		    },
	    	function(position) {
		    	deferred.resolve(position); 
		  	}
	  	);
	  	return deferred.promise;
	}

	function clearWatch(watch) {
		watch.clearWatch();
	}

	currentLocation.init = init;
	currentLocation.getCurrentLocation = getCurrentLocation;
	currentLocation.watchCurrentLocation = watchCurrentLocation;
	currentLocation.clearWatch = clearWatch;
})();


var ui = {};
(function (){
	var $scope, $log, $ionicSideMenuDelegate, $ionicPopup, uiGmapGoogleMapApi;

	function init(_$scope, _$log, _$ionicSideMenuDelegate, _$ionicPopup, _uiGmapGoogleMapApi) {
		$scope = _$scope;
		$log = _$log;
		$ionicSideMenuDelegate = _$ionicSideMenuDelegate;
		$ionicPopup = _$ionicPopup;
		uiGmapGoogleMapApi = _uiGmapGoogleMapApi;
		
		setDefaults();
		wireHandlers();
		addEventListeners();
	}

	function setDefaults() {
		$scope.previousPosition.latitude = $scope.currentPosition.latitude = -36.849562;
		$scope.previousPosition.longitude = $scope.currentPosition.longitude = 174.764876;
		$scope.mapZoom = 8;
		$scope.map = { center: { 
			latitude: $scope.currentPosition.latitude, 
			longitude: $scope.currentPosition.longitude 
			}, 
			zoom: 8 };
		setMapHeight();
	}
	function wireHandlers() {
		$scope.toggleLeft = toggleLeft;
	  	$scope.showAlert  = showAlert;
	}
	function toggleLeft() {
		$ionicSideMenuDelegate.toggleLeft();
	}
	function showAlert() {
		var alertPopup = $ionicPopup.alert({
	     	title: _title,
	     	template: _template
	   	});
	   	alertPopup.then(function(res) {
	     	console.log('popped up');
	   	});
	}
	function setMapHeight () {
		var mapEle = angular.element(document.getElementsByClassName("angular-google-map"));
		mapEle.css("height", window.clientHeight);
	}
	function addEventListeners () {
		addOrientationChangeListener();
		addWindowResizeListener();		
	}
	function addOrientationChangeListener () {
		window.addEventListener("orientationchange", function (event) {
			setMapHeight();
		});
	}
	function addWindowResizeListener () {
		window.addEventListener("resize", function (event) {
			setMapHeight();
		});
	}

	ui.init = init;
})();


mapsController.controller('MapsCtrl', [
	'$scope',
	'$q',
	'$log',
	'$timeout',
	'uiGmapGoogleMapApi',
	'$ionicSideMenuDelegate',
	'$ionicPlatform',
	'$ionicPopup',
	'$cordovaGeolocation',
	'$cordovaVibration',
	'$cordovaDialogs',
	'$cordovaToast',
	'DataAccessService',
	'uiGmapIsReady',

	function($scope,
			 $q,	 
			 $log, 
			 $timeout, 
			 uiGmapGoogleMapApi, 
			 $ionicSideMenuDelegate, 
			 $ionicPlatform, 
			 $ionicPopup, 
			 $cordovaGeolocation, 
			 $cordovaVibration,
			 $cordovaDialogs,
			 $cordovaToast, 
			 dataAccessService,
			 uiGmapIsReady) {

		$scope.previousPosition = {};
		$scope.currentPosition  = {};
		$scope.cameraMarkers    = [];
		$scope.mapZoom = {};
		
		function setCurrentLocation(_position) {
			$scope.currentPosition.latitude = _position.coords.latitude;
		    $scope.currentPosition.longitude = _position.coords.longitude;
		    $scope.previousPosition = angular.copy($scope.currentPosition);
		    $scope.currentLocationMarker = buildCurrentLocationMarker(_position);
		}
		function buildMarker(_id, _description, lat, lng, _icon) {
			var marker = {
				id: _id,
				show: false,
				description: _description,
				coords: {latitude: lat, longitude: lng}
			};
			_icon ? marker.icon = _icon : '';
			marker.onClick = function() {
				marker.show = !marker.show;
			};
			return marker;
		}
		function buildCurrentLocationMarker(_position) {
			var marker = buildMarker('Me', 'I am here!', _position.coords.latitude, _position.coords.longitude, '/android_asset/www/images/blue-dot.png');
			return marker;
		}
		function buildCameraMarkerDescription(_camera) {
			var description;
			description = _camera.speed_limit ? 'Speed Limit: ' + _camera.speed_limit : 'No Speed Limit available';
			description += " "; 
			description += _camera.type ? 'Camera Type: ' + _camera.type : 'No Camera Type available';
			return description;
		}

		function setCameraMarkers(markers, _cameras) {
			angular.forEach(_cameras, function(camera) {
				markers.push(buildMarker(camera.id, buildCameraMarkerDescription(camera), camera.latitude, camera.longitude));
				$log.debug('camera id: ' + camera.id);
			});
		}

		uiGmapGoogleMapApi.then(function(maps) {

			ui.init($scope, $log, $ionicSideMenuDelegate, $ionicPopup, uiGmapGoogleMapApi);
		    currentLocation.init($scope, $q, $cordovaGeolocation);
			cameraWarning.init($scope, $cordovaVibration, $cordovaDialogs, $cordovaToast);

			dataAccessService.getCameras('new zealand')
				.then(function (cameras) {
					setCameraMarkers($scope.cameraMarkers, cameras.value);
				});

			currentLocation
				.getCurrentLocation()
				.then(function (position) {
					setCurrentLocation(position);	
				});

		    currentLocation.watchCurrentLocation().then(function (position) {
		    	setCurrentLocation(position);
		    	cameraWarning.warnApproachingCamera();
		    });
	    });
	}
]);