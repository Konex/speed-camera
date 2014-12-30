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
		var position = $scope.currentPosition;

		if (_.isUndefined(position) && _.isEmpty(position)) return false;
		
		if(position.longitude <= borderPosition.aus.nsw.eastLng && 
		   position.longitude >= borderPosition.aus.nsw.westlng &&
		   position.latitude <= borderPosition.aus.nsw.northLat &&
		   position.latitude >= borderPosition.aus.nsw.southLat) {

			if (position.longitude >= borderPosition.aus.act.eastOuterLng && 
				position.longitude <= borderPosition.aus.act.westOuterlng &&
				position.latitude >= borderPosition.aus.act.northOuterLat &&
				position.latitude <= borderPosition.aus.act.southOuterLat) {
				$scope.userSettings.previousCountry = $scope.userSettings.country;
				$scope.userSettings.previousState = $scope.userSettings.state;
				$scope.userSettings.country = 'Australia';
				$scope.userSettings.state   = 'nsw';
				return true;
			}
		}

		if(position.longitude <= borderPosition.aus.vic.eastLng && 
		   position.longitude >= borderPosition.aus.vic.westlng &&
		   position.latitude <= borderPosition.aus.vic.northLat &&
		   position.latitude >= borderPosition.aus.vic.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'vic';
			return true;
		}

		if(position.longitude <= borderPosition.aus.nsw.eastLng && 
		   position.longitude >= borderPosition.aus.nsw.westlng &&
		   position.latitude <= borderPosition.aus.nsw.northLat &&
		   position.latitude >= borderPosition.aus.nsw.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'nsw';
			return true;
		}

		if(position.longitude <= borderPosition.aus.wa.eastLng && 
		   position.longitude >= borderPosition.aus.wa.westlng &&
		   position.latitude <= borderPosition.aus.wa.northLat &&
		   position.latitude >= borderPosition.aus.wa.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'wa';
			return true;
		}

		if(position.longitude <= borderPosition.aus.nsw.eastLng && 
		   position.longitude >= borderPosition.aus.nsw.westlng &&
		   position.latitude <= borderPosition.aus.nsw.northLat &&
		   position.latitude >= borderPosition.aus.nsw.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'nsw';
			return true;
		}

		if(position.longitude <= borderPosition.aus.qld.eastLng && 
		   position.longitude >= borderPosition.aus.qld.westlng &&
		   position.latitude <= borderPosition.aus.qld.northLat &&
		   position.latitude >= borderPosition.aus.qld.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'qld';
			return true;
		}

		if(position.longitude <= borderPosition.aus.sa.eastLng && 
		   position.longitude >= borderPosition.aus.sa.westlng &&
		   position.latitude <= borderPosition.aus.sa.northLat &&
		   position.latitude >= borderPosition.aus.sa.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'sa';
			return true;
		}

		if(position.longitude <= borderPosition.aus.nt.eastLng && 
		   position.longitude >= borderPosition.aus.nt.westlng &&
		   position.latitude <= borderPosition.aus.nt.northLat &&
		   position.latitude >= borderPosition.aus.nt.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'nt';
			return true;
		}

		if(position.longitude <= borderPosition.aus.act.eastInnerLng && 
		   position.longitude >= borderPosition.aus.act.westInnerlng &&
		   position.latitude <= borderPosition.aus.act.northInnerLat &&
		   position.latitude >= borderPosition.aus.act.southInnerLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'act';
			return true;
		}

		if(position.longitude <= borderPosition.aus.tas.eastInnerLng && 
		   position.longitude >= borderPosition.aus.tas.westInnerlng &&
		   position.latitude <= borderPosition.aus.tas.northInnerLat &&
		   position.latitude >= borderPosition.aus.tas.southInnerLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'Australia';
			$scope.userSettings.state   = 'tas';
			return true;
		}

		if(position.longitude <= borderPosition.nz.eastLng && 
		   position.longitude >= borderPosition.nz.westlng &&
		   position.latitude <= borderPosition.nz.northLat &&
		   position.latitude >= borderPosition.nz.southLat) {
		   	$scope.userSettings.previousCountry = $scope.userSettings.country;
			$scope.userSettings.previousState = $scope.userSettings.state;
			$scope.userSettings.country = 'New Zealand';
			return true;
		}

		$scope.showAlert('Oops!', 'Sorry, I can\'t find any cameras');
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
	  	var dLat  = rad(p2.lat() - p1.lat());
	  	var dLong = rad(p2.lng() - p1.lng());
	  	var a     = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
	    
	    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
	    Math.sin(dLong / 2) * Math.sin(dLong / 2);
	  	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	  	var d = R * c;
	  	
	  	return d; // returns the distance in meter
	}

	geoPointDistance.getDistance = getDistance;
})(); 


var cameraWarning = {};
(function () {

	function warnCamera() {
		var cameraPos = {};
		var cameraMarker = {};

		var previousDistance, currentDistance, shortestDistance = Number.MAX_VALUE;



	}

	cameraWarning.warnCamera = warnCamera; 
})();








var cameraMarkers = {};
(function () {
	var $scope, dataAccessService;

	function init(_$scope, _dataAccessService) {
		$scope               = _$scope;
		dataAccessService    = _dataAccessService;
		$scope.cameraMarkers = [];
	}

	function getCameraMarkersIfNeeded() {
		if(geolocationReversion.calcLocation($scope) && refetchMarkersNeeded()) {	
			var jsonFilePath = dataAccessService.translateParam($scope.userSettings.country, $scope.userSettings.state);

			dataAccessService.getCameras(jsonFilePath)
			.then(function(data) {
				var markers = [];
				setMarkers(markers, data);
				$scope.cameraMarkers = markers;
			}, function(error) {
				// error
			});
		}	
	}

	function refetchMarkersNeeded() {
		return !($scope.userSettings.previousCountry == $scope.userSettings.country && $scope.userSettings.previousState == $scope.userSettings.state);
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

	function buildCurrentLocationMarker() {
		if (!_.isUndefined($scope.currentPosition) && !_.isEmpty($scope.currentPosition)) {
			$scope.currentLocationMarker = {
				id: 0,
				icon: 'https://chart.googleapis.com/chart?chst=d_map_spin&chld=1|0|FFFF42|11|b|Me',
				coords: {latitude: $scope.currentPosition.latitude, longitude: $scope.currentPosition.longitude}
			};
		}
	}

	cameraMarkers.init = init;
	cameraMarkers.getCameraMarkersIfNeeded = getCameraMarkersIfNeeded;
	cameraMarkers.buildCurrentLocationMarker = buildCurrentLocationMarker;

})();






var currentLocation = {};
(function (){

	var $scope, $cordovaGeolocation, $ionicPlatform, watch;

	function init(_$scope, _$cordovaGeolocation, _$ionicPlatform) {
		$scope              = _$scope;
		$cordovaGeolocation = _$cordovaGeolocation;
		$ionicPlatform      = _$ionicPlatform;
		$scope.currentPosition = {};
	}

	function getCurrentLocation() {
		$ionicPlatform.ready(function() {
			var posOptions = {timeout: 10000, enableHighAccuracy: false};

		  	$cordovaGeolocation
			    .getCurrentPosition(posOptions)
			    .then(function (position) {
			      $scope.currentPosition.latitude   = position.coords.latitude
			      $scope.currentPosition.longitude  = position.coords.longitude
			    }, function(err) {
		      		// error
		    	}
	    	);
		});
	}

	function watchCurrentLocation() {
		$ionicPlatform.ready(function() {
			var watchOptions = {
	    		frequency :         100,
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
		      		$scope.currentPosition.latitude   = position.coords.latitude
			      	$scope.currentPosition.longitude  = position.coords.longitude

			      	cameraMarkers.buildCurrentLocationMarker();
			      	cameraMarkers.getCameraMarkersIfNeeded();
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
		$scope.toggleLeft = function() {
	    	$ionicSideMenuDelegate.toggleLeft();
	  	};

	  	$scope.showAlert = function(_title, _template) {
		    var alertPopup = $ionicPopup.alert({
		     	title: _title,
		     	template: _template
		   	});
		   	alertPopup.then(function(res) {
		     	console.log('');
		   	});
		 };
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
	'$ionicPopup',
	'$cordovaGeolocation',
	'DataAccessService',

	function($scope, $log, $timeout, uiGmapGoogleMapApi, $ionicSideMenuDelegate, $ionicPlatform, $ionicPopup, $cordovaGeolocation, dataAccessService) {		
		ui.init($scope, $log, $ionicSideMenuDelegate, $ionicPopup);	

		uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = { center: { latitude: -36.849562, longitude: 174.764876 }, zoom: 9 };
	    });

	    cameraMarkers.init($scope, dataAccessService);

	    currentLocation.init($scope, $cordovaGeolocation, $ionicPlatform);
		currentLocation.getCurrentLocation();
	    currentLocation.watchCurrentLocation();
	}
]);


