'use strict';

var settingsController = angular.module('settings.controller', [
]);


var ui = {};
(function () {
	var $scope;

	// var country = {
	// 	australia:  'australia',
	// 	newZealand: 'new zealand',
	// 	france:     'france' 
	// };

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
		// if ($scope.$parent.userSettings.country.toLowerCase() === country.australia) {
		// 	$scope.$parent.stateOptions = $scope.$parent.stateOptionsByCountry.australia
		// }

		// if ($scope.$parent.userSettings.country.toLowerCase() === country.newZealand) {

		// }

		// if ($scope.$parent.userSettings.country.toLowerCase() === country.france) {

		// }
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