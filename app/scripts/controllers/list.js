'use strict';

angular.module('compendiumjsApp')
  .controller('ListCtrl', function ($scope, Appdata, $rootScope) {
  		

  		$scope.inputText = Appdata.inputText;

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
