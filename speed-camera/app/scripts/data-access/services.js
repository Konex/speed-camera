'use strict';

var dataAccessServices = angular.module('dataAccess.services', []);

dataAccessServices.factory('DataAccessService', ['$http', '$q', function($http, $q) {
  	var dataAccessService = {};

	dataAccessService.translateParam = function(country, stateShortName) {
        if (!_.isEmpty(stateShortName))
		    return 'assets/cameras/' + country.toLowerCase().replace(' ', '-') + '/' + stateShortName.toLowerCase() + '.json';
        else 
            return 'assets/cameras/' + country.toLowerCase().replace(' ', '-') + '/' + country.toLowerCase().replace(' ', '-') + '.json';
	};

	dataAccessService.getCameras = function(jsonFilePath) {
		
		return $http.get(jsonFilePath)
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