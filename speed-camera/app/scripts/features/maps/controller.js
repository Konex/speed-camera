'use strict';
var mapsController = angular.module('maps.controller', [
]);



var cameraMarkers = {};
(function () {
	var $scope, $ionicPopup, dataAccessService;

	function init(_$scope, _$ionicPopup, _dataAccessService) {
		$scope = _$scope;
		$ionicPopup = _$ionicPopup;
		dataAccessService = _dataAccessService;
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
			//marker.options = {labelContent: data.value[i].description + ' Speed Limit:' + data.value[i].speed_limit + ' Type:' + data.value[i].type};
			markers.push(marker);	
		});
	}

	function markerClick(marker) {
		var title = 'Info';
		var description = 'Sorry we can\'t find anything about this camera.';
		if (marker && !_.isEmpty(marker)) {
			description = marker.description;
		} 

		var alertPopup = $ionicPopup.alert({
	     	title: title,
	     	template: description
	   	});
	   	
	   	alertPopup.then(function(res) {
	     	console.log('');
	   });
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
		$scope.markerClick = markerClick;
	}

	function markerClick(markerId) {
		var marker = _.findWhere($scope.cameraMarkers, {id: markerId});
		var title = 'Info';
		var description = 'Sorry we can\'t find anything about this camera.';
		if (marker && !_.isEmpty(marker)) {
			description = marker.description;
		} 

		var alertPopup = $ionicPopup.alert({
	     	title: title,
	     	template: description
	   	});
	   	
	   	alertPopup.then(function(res) {
	     	console.log('');
	   });
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

	    cameraMarkers.init($scope, $ionicPopup, dataAccessService);
		cameraMarkers.getCameraMarkers();

		//ui.init($scope, $ionicPopup, _);
	}
]);


