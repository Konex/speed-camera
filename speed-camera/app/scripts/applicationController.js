'use strict';

var applicationController = angular.module('applicationController', []);



var userPreferences = {};
(function() {

	var userSettings = {
		weatherOnOff:      {text: 'Weather',        checked: false},  
		trafficOnOff:      {text: 'Traffic',        checked: false},
		mobileCameraOnOff: {text: 'Mobile Camera',  checked: false}, 		
		
		soundOnOff:        {text: 'Sound',          checked: false},
		vibrationOnOff:    {text: 'Vibration',      checked: false},
		warningDistance:   20, 
		gpsIntervalSecond: 7,
		gpsIntervalMeter:  10,

		myLocationOnOff:   {text: 'My Location',    checked: false},
		needForSpeedOnOff: {text: 'Need For Speed', checked: true},
		country: '',
		state: '',
		
		previousCountry: '',
		previousState: ''
	};

	var $scope;

	function init(_$scope) {
		$scope = _$scope;
		$scope.userSettings = userSettings;
	}

	userPreferences.init = init;
	
})();




var currentUser = {};
(function() {
	var $scope, USER_ROLES, AuthService;

	function init(_$scope, _USER_ROLES, _AuthService) {
		$scope      = _$scope;
		USER_ROLES  = _USER_ROLES;
		AuthService = _AuthService;

		setDefaults();
		setPublicMethods();
	}

	function setDefaults() {
		$scope.currentUser  = null;
		$scope.useRoles     = USER_ROLES;
		$scope.isAuthorized = AuthService.isAuthorized;
	}

	function setPublicMethods() {
		$scope.setCurrentUser = function(user) {
			$scope.currentUser = user;
		};
	}

	currentUser.init = init;
})();











var appUi = {};
(function() {
	var $scope;

	function init(_$scope) {
		$scope = _$scope;
		setDefaults();
	}

	function setDefaults() {
		// For some reason ion-view does not cache child scope so have to store map variables here.
		$scope.currentPosition = {};
		$scope.cameraMarkers   = [];

		$scope.countryOptions = [
			{name: 'Australia',   value: 'Australia'},
			{name: 'New Zealand', value: 'New Zealand'},
			{name: 'France',      value: 'France'}
		];

		$scope.stateOptions = [

		];
	}


	appUi.init = init;

})();






applicationController.controller('ApplicationController', [
	'$scope',
	'USER_ROLES',
	'AuthService',

  	function ($scope, USER_ROLES, AuthService) {
		// TODO: setup user auth if needed
		//currentUser.init($scope, USER_ROLES, AuthService);

		userPreferences.init($scope);
		appUi.init($scope);
	}
]);