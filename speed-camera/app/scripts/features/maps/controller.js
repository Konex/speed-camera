'use strict';
var mapsController = angular.module('maps.controller', [
]);


var geolocationReversion = {};
(function () {

	var borderPosition = {
		aus: {
			nsw: {eastLng: 153.638569, westlng: 145.534778, northLat: -28.999174, southLat: -35.802317},
			act: {eastOuterLng: 149.399259, westOuterlng: 148.76413, northOuterLat: -35.124524, southOuterLat: -35.802317, eastInnerLng: 149.188805, westInnerlng: 148.983841, northInnerLat: -35.206574, southInnerLat: -35.372473},
			vic: {eastLng: 147.99871,  westlng: 140.964583, northLat: -36.129549, southLat: -39.136408},
			wa:  {eastLng: 129.00073,  westlng: 112.921528, northLat: -13.740807, southLat: -35.135288},
			qld: {eastLng: 153.63859,  westlng: 141.000284, northLat: -10.687611, southLat: -28.156202},
			sa:  {eastLng: 140.964583, westlng: 129.001626, northLat: -25.998617, southLat: -38.061198},
			nt:  {eastLng: 137.99637,  westlng: 129.00073,  northLat: -11.124241, southLat: -25.998641},
			tas: {eastLng: 148.481275, westlng: 143.818394, northLat: -39.580129, southLat: -43.663569} 
		},
		nz:  {eastLng: 178.576534, westlng: 166.426219, northLat: -34.393383, southLat: -47.289367},
		fr:  {}
	};

	function calc(position) {
		//var $scope = _$scope;
		
		if(position.longitude <= borderPosition.aus.nsw.eastLng && 
		   position.longitude >= borderPosition.aus.nsw.westlng &&
		   position.latitude <= borderPosition.aus.nsw.northLat &&
		   position.latitude >= borderPosition.aus.nsw.southLat) {

			if (position.longitude >= borderPosition.aus.act.eastOuterLng && 
				position.longitude <= borderPosition.aus.act.westOuterlng &&
				position.latitude >= borderPosition.aus.act.northOuterLat &&
				position.latitude <= borderPosition.aus.act.southOuterLat) {
				// $scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
				// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
				// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
				// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'nsw'});
				// return true;
				return {country: 'australia', state: 'nsw'};
			}
		}

		if(position.longitude <= borderPosition.aus.vic.eastLng && 
		   position.longitude >= borderPosition.aus.vic.westlng &&
		   position.latitude <= borderPosition.aus.vic.northLat &&
		   position.latitude >= borderPosition.aus.vic.southLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'vic'});
			// return true;
			return {country: 'australia', state: 'vic'};
		}

		if(position.longitude <= borderPosition.aus.wa.eastLng && 
		   position.longitude >= borderPosition.aus.wa.westlng &&
		   position.latitude <= borderPosition.aus.wa.northLat &&
		   position.latitude >= borderPosition.aus.wa.southLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'wa'});
			// return true;
			return {country: 'australia', state: 'wa'};
		}

		if(position.longitude <= borderPosition.aus.qld.eastLng && 
		   position.longitude >= borderPosition.aus.qld.westlng &&
		   position.latitude <= borderPosition.aus.qld.northLat &&
		   position.latitude >= borderPosition.aus.qld.southLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'qld'});
			// return true;
			return {country: 'australia', state: 'qld'};
		}

		if(position.longitude <= borderPosition.aus.sa.eastLng && 
		   position.longitude >= borderPosition.aus.sa.westlng &&
		   position.latitude <= borderPosition.aus.sa.northLat &&
		   position.latitude >= borderPosition.aus.sa.southLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'sa'});
			// return true;
			return {country: 'australia', state: 'sa'};
		}

		if(position.longitude <= borderPosition.aus.nt.eastLng && 
		   position.longitude >= borderPosition.aus.nt.westlng &&
		   position.latitude <= borderPosition.aus.nt.northLat &&
		   position.latitude >= borderPosition.aus.nt.southLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'nt'});
			// return true;
			return {country: 'australia', state: 'nt'};
		}

		if(position.longitude <= borderPosition.aus.act.eastInnerLng && 
		   position.longitude >= borderPosition.aus.act.westInnerlng &&
		   position.latitude <= borderPosition.aus.act.northInnerLat &&
		   position.latitude >= borderPosition.aus.act.southInnerLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'act'});
			// return true;
			return {country: 'australia', state: 'act'};
		}

		if(position.longitude <= borderPosition.aus.tas.eastInnerLng && 
		   position.longitude >= borderPosition.aus.tas.westInnerlng &&
		   position.latitude <= borderPosition.aus.tas.northInnerLat &&
		   position.latitude >= borderPosition.aus.tas.southInnerLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			// $scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'tas'});
			// return true;
			return {country: 'australia', state: 'tas'};
		}

		if(position.longitude <= borderPosition.nz.eastLng && 
		   position.longitude >= borderPosition.nz.westlng &&
		   position.latitude <= borderPosition.nz.northLat &&
		   position.latitude >= borderPosition.nz.southLat) {
		 //   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			// $scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			// $scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.newZealand});
			// $scope.userSettings.state           = $scope.stateOptionsByCountry.newZealand;

			// return true;
			return {country: 'new zealand', state: ''};
		}

		return {country: '', state: ''};
	}

	geolocationReversion.calc = calc;
	
})(); 


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
	  	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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
		$scope            = _$scope;
		$cordovaVibration = _$cordovaVibration;
		$cordovaDialogs   = _$cordovaDialogs;
		$cordovaToast     = _$cordovaToast;
	}

	function warnCamera() {
		if (!$scope.cameraMarkers || _.isEmpty($scope.cameraMarkers) || !$scope.previousPosition || !$scope.currentPosition) 
			return;
		
		var nearestCamera = calcNearestCamera();
		
		if (!nearestCamera) 
			return;

		giveWarning();
	}

	function calcNearestCamera() {
		var nearestCameraMarker, previousDistance, currentDistance, distanceToNearestCamera = Number.MAX_VALUE;

		_.each($scope.cameraMarkers, function(cameraMarker) {
			var markerPosition = {latitude: cameraMarker.latitude, longitude: cameraMarker.longitude};
			currentDistance    = geoPointDistance.getDistance($scope.currentPosition, markerPosition);
			previousDistance   = geoPointDistance.getDistance($scope.previousPosition, markerPosition);

			if (currentDistance <= previousDistance && currentDistance < distanceToNearestCamera) {
				distanceToNearestCamera = currentDistance;
				nearestCameraMarker = angular.copy(cameraMarker);
			}

			if (distanceToNearestCamera > $scope.userSettings.warningDistance)
				nearestCameraMarker = null;

			return nearestCameraMarker;
		});
	}

	function giveWarning() {
		if ($scope.userSettings.vibrationOnOff.checked)
			$cordovaVibration.vibrate(100);

		if ($scope.userSettings.soundOnOff.checked)
			$cordovaDialogs.beep(1);

		if ($scope.userSettings.toastOnOff.checked)
			$cordovaToast.showShortTop('Approaching Speed Camera!')
				.then(function(success) {
			    // success
		  		}, function (error) {
			    // error
		  		});
	}

	cameraWarning.init = init;
	cameraWarning.warnCamera = warnCamera; 
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

	function clearWatch() {
		if (watch)
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
			var marker = buildMarker('Me', 'I am here!', _position.coords.latitude, _position.coords.longitude, '../../images/blue-dot.png');
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

			currentLocation
				.getCurrentLocation()
				.then(function (position) {
					setCurrentLocation(position);
					return dataAccessService.getCameras('new zealand', '');
				})
				.then(function (cameras) {
		        	setCameraMarkers($scope.cameraMarkers, cameras.value);
				});

		    currentLocation.watchCurrentLocation().then(function (position) {
		    	setCurrentLocation(position);
		    });
	    });
	}
]);