'use strict';
var mapsController = angular.module('maps.controller', []);

mapsController.controller('MapsCtrl', [
	'$scope',
	'uiGmapGoogleMapApi',
	'$ionicSideMenuDelegate',

	function($scope, uiGmapGoogleMapApi, $ionicSideMenuDelegate) {
	// e.g. $scope.markers = [];

	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  	};

	uiGmapGoogleMapApi.then(function(maps) {
		$scope.map = { center: { latitude: -36.849837, longitude: 174.761099 }, zoom: 9 };
    });  
}]);


mapsController.directive('fadeBar', function($timeout) {
        return {
          restrict: 'E',
          template: '<div class="fade-bar"></div>',
          replace: true,
          link: function($scope, $element, $attr) {
            $timeout(function() {
              $scope.$watch('sideMenuController.getOpenRatio()', function(ratio) {
                $element[0].style.opacity = Math.abs(ratio);
              });
            });
          }
        }
      });