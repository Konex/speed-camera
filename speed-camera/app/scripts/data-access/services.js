'use strict';

var dataAccessServices = angular.module('dataAccess.services', []);

dataAccessServices.factory('DataAccessService', [
	'$cordovaSQLite',
  
  	function($cordovaSQLite) {
  		var dataAccessService = {};

  		dataAccessService.createDB = function() {

  		};

  		dataAccessService.openDB = function() {
  			var dbPath = '../assets/db/speed-camera.sqlite';
  			return $cordovaSQLite.openDB({ name: dbPath });
  		};

  		dataAccessService.insert = function() {

  		};

  		dataAccessService.select = function(query) {
  		
        	$cordovaSQLite.execute(db, query, []).then(function(res) {
            
	            if(res.rows.length > 0) {
	                console.log("SELECTED -> " + res.rows.item(0).description + " " + res.rows.item(0).description);
	                return res;
	            } else {
	                console.log("No results found");
	                return null;
	            }
        	}, 
        	function (e) {
            	console.error(e);
        	});
  		};

  		dataAccessService.getAllCameras = function(db) {
  			var query = 'SELECT * FROM cameras';
  			$cordovaSQLite.execute(db, query, []).then(function(res) {
            
	            if(res.rows.length > 0) {
	                console.log("SELECTED -> " + res.rows.item(0).description + " " + res.rows.item(0).description);
	                return res;
	            } else {
	                console.log("No results found");
	                return null;
	            }
        	}, 
        	function (e) {
            	console.error(e);
        	});	
  		};

    });
}]);