'use strict';

var applicationController = angular.module('applicationController', []);

var userPreferences = {};
(function() {

	// TODO: move it to user setting controller
	// var availableCountry = {
	// 	australia:  'australia',
	// 	newZealand: 'newZealand',
	// 	france:     'france' 
	// };

	// var countryOptions = [
	// 	{name: 'Australia',   value: 'australia'},
	// 	{name: 'New Zealand', value: 'newZealand'},
	// 	{name: 'France',      value: 'france'}
	// ];

	// var stateOptionsByCountry = {
	// 	australia: [
	// 		{name: 'Australian Capital Territory', value: 'act'},
 //            {name: 'New South Wales',              value: 'nsw'},
 //            {name: 'Northern Territory',           value: 'nt'},
 //            {name: 'Queensland',                   value: 'qld'},
 //            {name: 'Western Australia',            value: 'wa'},
 //            {name: 'Tasmania',                     value: 'tas'},
 //            {name: 'Victoria',                     value: 'vic'},
 //            {name: 'South Australia',              value: 'sa'}
	// 	],

	// 	newZealand: [
	// 		{name: '', value: 'newZealand'}
	// 	],

	// 	france: [
	// 		{name: 'France', value: 'france'}
	// 	]
	// };

	// var stateOptions = [
	// 	{name: '', value: ''}
	// ];

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
		country:           {name: '', value: ''},
		state:             {name: '', value: ''},
		
		previousCountry:   {name: '', value: ''},
		previousState:     {name: '', value: ''}
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