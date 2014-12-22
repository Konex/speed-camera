'use strict';

var mapsDirectives = angular.module('maps.directives', []);

mapsDirectives.directive('fadeBar', [
    '$timeout',

    function($timeout) {
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
}]);