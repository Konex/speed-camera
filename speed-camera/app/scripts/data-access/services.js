'use strict';

var dataAccessServices = angular.module('dataAccess.services', []);

dataAccessServices.factory('DataAccessService', ['$http',
	
  	function($http) {
  		var dataAccessService = {};

  		dataAccessService.translateParam = function(countryCode) {
  			return 'speed-camera-' + countryCode;
  		};

  		dataAccessService.getCameras = function(jsonFileName) {
			return $http
	        .get('assets/cameras/' + jsonFileName)
	        .then(function (res) {
	            return res.data;
	        });
  		};

  		return dataAccessService;
	}
]);