'use strict';

var settingsController = angular.module('settings.controller', [
]);


var ui = {};
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

	ui.init = init;

})();



settingsController.controller('SettingsCtrl', [
	'$scope',
	'$cordovaToast',

	function($scope,
			 $cordovaToast) {

		ui.init($scope);
	}
]);