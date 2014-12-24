'use strict';

var dataAccessServices = angular.module('dataAccess.services', ['ngResource']);

dataAccessServices.factory('DataAccessService', ['$resource',
	
  	function($resource) {
  		var dataAccessService = {};

  		dataAccessService.translateParam = function(countryCode) {
  			return 'speed-camera-' + countryCode;
  		};

  		dataAccessService.getCameras = function() {
			return $resource('assets/cameras/:fileName.json', {fileName: '@fileName'}, {
		    	query: {method:'GET', params:{fileName:'speed-camera-au'}, isArray:true}
		    });
  		};

  		return dataAccessService;
	}
]);