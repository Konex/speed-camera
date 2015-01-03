'use strict';

var settingsController = angular.module('settings.controller', [
]);


var settingsUi = {};
(function () {
	var $scope;

	function init(_$scope) {
		$scope = _$scope;

		setDefaults();
		wireHandlers();
	}

	function setDefaults() {

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

	function($scope,
			 $cordovaToast) {

		settingsUi.init($scope);
	}
]);