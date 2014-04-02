'use strict';

angular.module('compendiumjsApp')
  .service('Appdata', function Appdata($http, $q, $rootScope) {
  	var inputText = 'javascript';
  	this.getData = function(){
  		var deferred = $q.defer();

  		 $http.jsonp('http://www.kimonolabs.com/api/dlhql192?apikey=b728d0f47eecaab0f810f9a49bd0b105&callback=JSON_CALLBACK')
  		 .success(function(data){
  		 	deferred.resolve(data);
  		 }).error(function(){
  		 	deferred.reject(data);
  		 })

  		 return deferred.promise;

  	}


  	// var returnedObject;

    
   //      returnedObject = $q.defer();

   //      	returnedObject.all([
   //              $http.jsonp('http://www.kimonolabs.com/api/bwfam7gw?apikey=b728d0f47eecaab0f810f9a49bd0b105&callback=JSON_CALLBACK')
   //          ]).then(function (results) {
   //          	$rootScope.$broadcast('dataLoaded');
   //              return results;

   //          });

    
  });
