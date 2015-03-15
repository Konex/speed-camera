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
		gpsIntervalSecond: 5,

		myLocationOnOff:   {text: 'My Location',    checked: false}
	};

	var $scope, $log, localStorageService;

	function init(_$scope, _$log, _localStorageService) {
		$scope = _$scope;
		$log = _$log;
		localStorageService = _localStorageService;
		
		setDefaults();
		wireWatchers();
	}

	function setDefaults() {
		$scope.userSettings = userSettings;
	}

	function wireWatchers() {
		$scope.$watch('userSettings', function(newValue, oldValue) {
			if (localStorageService.isSupported) {
				localStorageService.set('userSettings', $scope.userSettings);
			}
		}, true);
	}

	function get() {
		var settings = localStorageService.get('userSettings');
		$scope.userSettings =  settings;
	}

	userPreferences.init = init;
	userPreferences.get  = get;
	
})();


var appUi = {};
(function() {
	var $scope, uiGmapGoogleMapApi;

	function init(_$scope, _uiGmapGoogleMapApi) {
		$scope              = _$scope;
		uiGmapGoogleMapApi  = _uiGmapGoogleMapApi;
		
		setDefaults();
	}

	function setDefaults() {
		$scope.countryOptions        = countryOptions;
		$scope.stateOptionsByCountry = stateOptionsByCountry;
		$scope.stateOptions          = stateOptions;
		$scope.availableCountry      = availableCountry;
	}

	appUi.init = init;

})();


applicationController.controller('ApplicationController', [
	'$scope',
	'$log',
	'AuthService',
	'uiGmapGoogleMapApi',
	'localStorageService',

  	function ($scope, $log, AuthService, uiGmapGoogleMapApi, localStorageService) {
		userPreferences.init($scope, $log, localStorageService);
		userPreferences.get();
		
		//appUi.init($scope, uiGmapGoogleMapApi);
	}
]);