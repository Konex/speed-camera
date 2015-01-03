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
		toastOnOff:        {text: 'Toast',          checked: false},
		warningDistance:   20, 
		gpsIntervalSecond: 7,
		gpsIntervalMeter:  10,

		myLocationOnOff:   {text: 'My Location',    checked: false},
		needForSpeedOnOff: {text: 'Need For Speed', checked: true},
		country:           {name: '', value: ''},
		state:             {name: '', value: ''},
		
		previousCountry:   {name: '', value: ''},
		previousState:     {name: '', value: ''}
	};

	var $scope;


	function init(_$scope) {
		$scope = _$scope;
		
		setDefaults();
	}

	function setDefaults() {
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

	var availableCountry = {
		australia:  'australia',
		newZealand: 'newZealand',
		france:     'france' 
	};

	var countryOptions = [
		{name: 'Australia',   value: 'australia'},
		{name: 'New Zealand', value: 'newZealand'},
		{name: 'France',      value: 'france'}
	];

	var stateOptionsByCountry = {
		australia: [
			{name: 'Australian Capital Territory', value: 'act'},
            {name: 'New South Wales',              value: 'nsw'},
            {name: 'Northern Territory',           value: 'nt'},
            {name: 'Queensland',                   value: 'qld'},
            {name: 'Western Australia',            value: 'wa'},
            {name: 'Tasmania',                     value: 'tas'},
            {name: 'Victoria',                     value: 'vic'}
		],

		newZealand: [
			{name: '', value: 'newZealand'}
		],

		france: [
			{name: 'France', value: 'france'}
		]
	};

	var stateOptions = [
		{name: '', value: ''}
	];


	function init(_$scope) {
		$scope = _$scope;
		// For some reason ion-view does not cache child scope so have to store map variables here.
		$scope.previousPosition = {};
		$scope.currentPosition  = {};
		$scope.cameraMarkers    = [];

		setDefaults();
		wireHandlers();
	}

	function setDefaults() {
		$scope.countryOptions        = countryOptions;
		$scope.stateOptionsByCountry = stateOptionsByCountry;
		$scope.stateOptions          = stateOptions;
		$scope.availableCountry      = availableCountry;
	}

	function wireHandlers() {

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