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
		myLocationOnOff:   {text: 'My Location',    checked: false},
		needForSpeedOnOff: {text: 'Need For Speed', checked: false},
		country: '',
		state: ''
	};

	var $scope;

	function init(_$scope) {
		$scope = _$scope;
		$scope.userSettings = userSettings;
	}

	function getUserPreferences() {

	}

	function setPublicMethods() {
		
	}


	userPreferences.init = init;
	userPreferences.getUserPreferences = getUserPreferences;
	userPreferences.setPublicMethods = setPublicMethods; 
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





applicationController.controller('ApplicationController', [
	'$scope',
	'USER_ROLES',
	'AuthService',

  	function ($scope, USER_ROLES, AuthService) {
		// TODO: setup user auth if needed
		//currentUser.init($scope, USER_ROLES, AuthService);

		userPreferences.init($scope);
	}
]);