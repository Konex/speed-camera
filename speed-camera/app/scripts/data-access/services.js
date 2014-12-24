'use strict';

var dataAccessServices = angular.module('dataAccess.services', []);

dataAccessServices.factory('DataAccessService', ['$http', '$q', function($http, $q) {
  	var dataAccessService = {};

	dataAccessService.translateParam = function(countryCode) {
		return 'speed-camera-' + countryCode;
	};

	dataAccessService.getCameras = function(jsonFileName) {
		
		return $http.get('assets/cameras/' + jsonFileName)
    	.then(function (response) {
    		if (typeof response.data == 'object') {
    			return response.data;
    		} else {
    			return $q.reject(response.data);
    		}
    	}, function(response) {
    		return $q.reject(response.data);
    	});    
	};

	return dataAccessService;
}]);