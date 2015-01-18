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

	function calcLocation(_$scope) {
		var $scope   = _$scope;
		var position = $scope.$parent.currentPosition;

		if (_.isUndefined(position) && _.isEmpty(position)) return false;
		
		if(position.longitude <= borderPosition.aus.nsw.eastLng && 
		   position.longitude >= borderPosition.aus.nsw.westlng &&
		   position.latitude <= borderPosition.aus.nsw.northLat &&
		   position.latitude >= borderPosition.aus.nsw.southLat) {

			if (position.longitude >= borderPosition.aus.act.eastOuterLng && 
				position.longitude <= borderPosition.aus.act.westOuterlng &&
				position.latitude >= borderPosition.aus.act.northOuterLat &&
				position.latitude <= borderPosition.aus.act.southOuterLat) {
				$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
				$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
				$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
				$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'nsw'});
				return true;
			}
		}

		if(position.longitude <= borderPosition.aus.vic.eastLng && 
		   position.longitude >= borderPosition.aus.vic.westlng &&
		   position.latitude <= borderPosition.aus.vic.northLat &&
		   position.latitude >= borderPosition.aus.vic.southLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'vic'});
			return true;
		}

		if(position.longitude <= borderPosition.aus.wa.eastLng && 
		   position.longitude >= borderPosition.aus.wa.westlng &&
		   position.latitude <= borderPosition.aus.wa.northLat &&
		   position.latitude >= borderPosition.aus.wa.southLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'wa'});
			return true;
		}

		if(position.longitude <= borderPosition.aus.qld.eastLng && 
		   position.longitude >= borderPosition.aus.qld.westlng &&
		   position.latitude <= borderPosition.aus.qld.northLat &&
		   position.latitude >= borderPosition.aus.qld.southLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'qld'});
			return true;
		}

		if(position.longitude <= borderPosition.aus.sa.eastLng && 
		   position.longitude >= borderPosition.aus.sa.westlng &&
		   position.latitude <= borderPosition.aus.sa.northLat &&
		   position.latitude >= borderPosition.aus.sa.southLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'sa'});
			return true;
		}

		if(position.longitude <= borderPosition.aus.nt.eastLng && 
		   position.longitude >= borderPosition.aus.nt.westlng &&
		   position.latitude <= borderPosition.aus.nt.northLat &&
		   position.latitude >= borderPosition.aus.nt.southLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'nt'});
			return true;
		}

		if(position.longitude <= borderPosition.aus.act.eastInnerLng && 
		   position.longitude >= borderPosition.aus.act.westInnerlng &&
		   position.latitude <= borderPosition.aus.act.northInnerLat &&
		   position.latitude >= borderPosition.aus.act.southInnerLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'act'});
			return true;
		}

		if(position.longitude <= borderPosition.aus.tas.eastInnerLng && 
		   position.longitude >= borderPosition.aus.tas.westInnerlng &&
		   position.latitude <= borderPosition.aus.tas.northInnerLat &&
		   position.latitude >= borderPosition.aus.tas.southInnerLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.australia});
			$scope.userSettings.state           = _.findWhere($scope.stateOptionsByCountry.australia, {value: 'tas'});
			return true;
		}

		if(position.longitude <= borderPosition.nz.eastLng && 
		   position.longitude >= borderPosition.nz.westlng &&
		   position.latitude <= borderPosition.nz.northLat &&
		   position.latitude >= borderPosition.nz.southLat) {
		   	$scope.userSettings.previousCountry = angular.copy($scope.userSettings.country);
			$scope.userSettings.previousState   = angular.copy($scope.userSettings.state);
			$scope.userSettings.country         = _.findWhere($scope.countryOptions, {value: $scope.availableCountry.newZealand});
			$scope.userSettings.state           = $scope.stateOptionsByCountry.newZealand;

			return true;
		}

		return false;
	}

	geolocationReversion.calcLocation = calcLocation;
	
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
		if (_.isEmpty($scope.cameraMarkers) || _.isEmpty($scope.previousPosition) || _.isEmpty($scope.currentPosition)) 
			return;
		
		var nearestCamera = calcNearestCamera();
		
		if (_.isUndefined(nearestCamera) || _.isEmpty(nearestCamera)) 
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

	var $scope, $log, $cordovaGeolocation, $ionicPlatform, watch;

	function init(_$scope, _$log, _$cordovaGeolocation, _$ionicPlatform) {
		$scope              = _$scope;
		$log                = _$log;
		$cordovaGeolocation = _$cordovaGeolocation;
		$ionicPlatform      = _$ionicPlatform;
	}

	function getCurrentLocation() {
		$ionicPlatform.ready(function() {
			var posOptions = {timeout: 10000, enableHighAccuracy: false};

		  	$cordovaGeolocation
			    .getCurrentPosition(posOptions)
			    .then(function (position) {
			      	$scope.$parent.currentPosition.latitude    = position.coords.latitude;
			      	$scope.$parent.currentPosition.longitude   = position.coords.longitude;
			      	googleMaps.moveMapsIfNeeded();
			      	currentLocation.buildCurrentLocationMarker();
			      	$scope.$parent.previousPosition = angular.copy($scope.$parent.currentPosition);
			    }, function(err) {
		      		// error
		    	}
	    	);
		});
	}

	function watchCurrentLocation() {
		$ionicPlatform.ready(function() {
			var watchOptions = {
	    		frequency :         $scope.$parent.userSettings.gpsIntervalSecond * 1000,
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
			    	$scope.$parent.previousPosition           = angular.copy($scope.$parent.currentPosition);
		      		$scope.$parent.currentPosition.latitude   = position.coords.latitude;
			      	$scope.$parent.currentPosition.longitude  = position.coords.longitude;

			      	googleMaps.moveMapsIfNeeded();
			      	currentLocation.buildCurrentLocationMarker();
			      	cameraMarkers.getCameraMarkersIfNeeded();
			      	cameraWarning.warnCamera();
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

	function buildCurrentLocationMarker() {
		if (!_.isUndefined($scope.$parent.currentPosition) && !_.isEmpty($scope.$parent.currentPosition)) {

			if (!_.isEqual($scope.$parent.currentPosition, $scope.$parent.previousPosition) || _.isUndefined($scope.currentLocationMarker)) {
				$scope.currentLocationMarker = {
					id:     0,
					icon:   '../../images/blue-dot.png',
					coords: {latitude: $scope.$parent.currentPosition.latitude, longitude: $scope.$parent.currentPosition.longitude}
				};
				$log.debug('current marker: ' + $scope.currentLocationMarker.id);
			}
		}
	}


	currentLocation.init = init;
	currentLocation.getCurrentLocation = getCurrentLocation;
	currentLocation.watchCurrentLocation = watchCurrentLocation;
	currentLocation.clearWatch = clearWatch;
	currentLocation.buildCurrentLocationMarker = buildCurrentLocationMarker;
})();







var cameraMarkers = {};
(function () {
	var $scope, $log, dataAccessService;

	function init(_$scope, _$log, _dataAccessService) {
		$scope               = _$scope;
		$log                 = _$log;
		dataAccessService    = _dataAccessService;
	}

	function getCameraMarkersIfNeeded() {
		if(geolocationReversion.calcLocation($scope) && refetchMarkersNeeded()) {	
			var jsonFilePath = dataAccessService.translateParam($scope.userSettings.country.name, $scope.userSettings.state.value);

			dataAccessService.getCameras(jsonFilePath)
			.then(function(data) {
				setMarkers($scope.$parent.cameraMarkers, data);
			}, function(error) {
				// error
			});
		}	
	}

	function refetchMarkersNeeded() {
		return !(_.isEqual($scope.userSettings.previousCountry, $scope.userSettings.country) && 
				 _.isEqual($scope.userSettings.previousState, $scope.userSettings.state)     && 
				 !_.isEmpty($scope.userSettings.country.name)                                &&
				 !_.isUndefined($scope.$parent.cameraMarkers)                                && 
				 !_.isEmpty($scope.$parent.cameraMarkers))
	}

	function setMarkers(markers, data) {	
		angular.forEach(data.value, function(item) {
			markers.push(buildMarker(item));
			$log.debug('marker id: ' + item.id);
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
	cameraMarkers.getCameraMarkersIfNeeded = getCameraMarkersIfNeeded;
	
})();





var googleMaps = {};
(function (){
	var $scope, uiGmapGoogleMapApi;

	function init(_$scope, _uiGmapGoogleMapApi) {
		$scope             = _$scope;
		uiGmapGoogleMapApi = _uiGmapGoogleMapApi;
	}

	function moveMapsIfNeeded() {
		if (!_.isEmpty($scope.currentPosition)                          && 
			!_.isEqual($scope.currentPosition, $scope.previousPosition) && 
			!_.isUndefined($scope.map)                                  &&
			!_.isEmpty($scope.map)) {

			$scope.map.center.latitude  = $scope.currentPosition.latitude;
			$scope.map.center.longitude = $scope.currentPosition.longitude;
		}
	} 


	googleMaps.init = init;
	googleMaps.moveMapsIfNeeded = moveMapsIfNeeded;

})();






var mapsUi = {};
(function (){
	var $scope, $log, $ionicSideMenuDelegate, $ionicPopup;

	function init(_$scope, _$log, _$ionicSideMenuDelegate, _$ionicPopup) {
		$scope                 = _$scope;
		$log                   = _$log;
		$ionicSideMenuDelegate = _$ionicSideMenuDelegate;
		$ionicPopup            = _$ionicPopup;
		
		setDefaults();
		wireHandlers();
	}

	function setDefaults() {
		
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
	     	console.log('');
	   	});
	}


	mapsUi.init = init;
})();













mapsController.controller('MapsCtrl', [
	'$scope',
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

	function($scope, 
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
			 dataAccessService) {

		mapsUi.init($scope, $log, $ionicSideMenuDelegate, $ionicPopup);	
		
		googleMaps.init($scope, uiGmapGoogleMapApi);

	    cameraMarkers.init($scope, $log, dataAccessService);

	    cameraWarning.init($scope, $cordovaVibration, $cordovaDialogs, $cordovaToast);

	    currentLocation.init($scope, $log, $cordovaGeolocation, $ionicPlatform);
		currentLocation.getCurrentLocation();
	    currentLocation.watchCurrentLocation();
	}
]);