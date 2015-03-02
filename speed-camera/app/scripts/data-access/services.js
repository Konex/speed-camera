'use strict';

var dataAccessServices = angular.module('dataAccess.services', []);

dataAccessServices.factory('DataAccessService', ['$http', '$q', function($http, $q) {
  	var dataAccessService = {};

	 function translateParam(country, stateShortName) {
        if (stateShortName)
		    return 'assets/cameras/' + country.toLowerCase().replace(' ', '-') + '/' + stateShortName.toLowerCase() + '.json';
        else 
            return 'assets/cameras/' + country.toLowerCase().replace(' ', '-') + '/' + country.toLowerCase().replace(' ', '-') + '.json';
	}

	dataAccessService.getCameras = function(country, state) {
        var jsonFilePath = translateParam(country, state);
		
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