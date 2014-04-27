'use strict';

angular.module('compendiumjsApp')
  .service('Appdata', function Appdata($http, $q, $rootScope, loggingService) {
  	var appData = this;
    appData.inputText = '';
    appData.deferred = $q.defer();
  	appData.getData = function(){
  		

  		 $http.jsonp('http://www.kimonolabs.com/api/cdwxcznk?apikey=b728d0f47eecaab0f810f9a49bd0b105&callback=JSON_CALLBACK')
  		 .success(function(data){
        
  		 	appData.deferred.resolve(data);
  		 }).error(function(){
  		 	appData.deferred.reject(data);
  		 })

  		 return appData.deferred.promise;

  	}


  	// var returnedObject;

    
   //      returnedObject = $q.defer();

   //      	returnedObject.all([
   //              $http.jsonp('http://www.kimonolabs.com/api/bwfam7gw?apikey=b728d0f47eecaab0f810f9a49bd0b105&callback=JSON_CALLBACK')
   //          ]).then(function (results) {
   //          	$rootScope.$broadcast('dataLoaded');
   //              return results;

   //          });

    return appData;
  });
