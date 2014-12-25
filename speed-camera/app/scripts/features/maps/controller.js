'use strict';
var mapsController = angular.module('maps.controller', [
]);






var cameraMarkers = {};
(function () {
	var $scope, $ionicPopup, dataAccessService, _;

	function init(_$scope, _$ionicPopup, _dataAccessService, _loDash) {
		$scope = _$scope;
		$ionicPopup = _$ionicPopup;
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
			var marker = {
				id: item.id, 
				latitude: item.latitude, 
				longitude: item.longitude
			};

			marker.onClicked = function(item) {
				var title = 'Camera Info';
				var description = buildMarkerDescription(item); 

				var alertPopup = $ionicPopup.alert({
			     	title: title,
			     	template: description
			   	});
			   	
			   	alertPopup.then(function(res) {
			     	console.log('');
			   });
			};

			markers.push(marker);	
		});
	}

	function buildMarkerDescription(markerItem) {
		var description = '';
		if (markerItem && !_.isEmpty(markerItem)) {
			
			if (!_.isUndefined(markerItem.description))
				description += markerItem.description + '\n';

			if (!_.isUndefined(markerItem.speed_limit))
				description += 'Speed Limit:' + markerItem.speed_limit + '\n';

			if (!_.isUndefined(markerItem.type))
				description += 'Type:' + markerItem.type;
		}

		if (_.isEmpty(description))
			description = 'Sorry we can\'t find anything about this camera.';

		return description;
	}

	cameraMarkers.init = init;
	cameraMarkers.getCameraMarkers = getCameraMarkers;

})();



var ui = {};
(function () {
	var $scope, $ionicPopup, _;

	function init(_$scope, _$ionicPopup, _loDash) {
		$scope = _$scope;
		$ionicPopup = _$ionicPopup;
		_ = _loDash;

		setDefaults();
		wireHandlers();
	}

	function setDefaults() {

	}

	function wireHandlers() {
		
	}

	ui.init = init;

})();





mapsController.controller('MapsCtrl', [
	'$scope',
	'uiGmapGoogleMapApi',
	'$ionicSideMenuDelegate',
	'DataAccessService',
	'$ionicPopup',
	'_',

	function($scope, uiGmapGoogleMapApi, $ionicSideMenuDelegate, dataAccessService, $ionicPopup, _) {
		$scope.toggleLeft = function() {
	    	$ionicSideMenuDelegate.toggleLeft();
	  	};

		uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = { center: { latitude: -34.932504, longitude: 138.597585 }, zoom: 9 };
	    }); 

	    cameraMarkers.init($scope, $ionicPopup, dataAccessService, _);
		cameraMarkers.getCameraMarkers();
	}
]);


