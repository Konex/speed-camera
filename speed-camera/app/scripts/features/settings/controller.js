'use strict';

var settingsController = angular.module('settings.controller', [
]);


var settingsUi = {};
(function () {
	var $scope, localStorageService;

	function init(_$scope, _localStorageService) {
		$scope 				= _$scope;
		localStorageService = _localStorageService;

		wireHandlers();
	}

	function wireHandlers() {
		$scope.countryChange = countryChange;
	}

	function countryChange() {
		$scope.$parent.stateOptions = $scope.$parent.stateOptionsByCountry[$scope.$parent.userSettings.country.value];
	}

	settingsUi.init = init;

})();



settingsController.controller('SettingsCtrl', [
	'$scope',
	'$cordovaToast',
	'localStorageService',

	function($scope, $cordovaToast, localStorageService) {
		settingsUi.init($scope, localStorageService);
	}
]);