'use strict';

angular.module('compendiumjsApp')
  .controller('listCtrl', function ($scope, Appdata, $rootScope) {
  		
  		$scope.appData = Appdata;
      $scope.list = $scope.appData.data;
      $scope.order = '';
      $scope.random = function() {
        var rand = Math.random();
        if(rand >= 0){
          return rand;
        }
        if(rand >= 100){
          return 99;
        }
        return 0;
      }
  		init();

  		function init(){
  			Appdata.getData()
  			.then(function(data){
  				$scope.list = data.results.collection1;
  			 	console.log($scope.list);
  			});
  		}

  		// $scope.$on('dataLoaded', function(){
  		// 	$scope.list = Appdata.returnedObject[0].data.results.collection1;
  		// 	console.log($scope.list);

  		// })
    	    	
  });
