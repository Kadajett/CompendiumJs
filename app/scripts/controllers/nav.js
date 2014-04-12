'use strict';

angular.module('compendiumjsApp')
  .controller('navCtrl', function ($scope, Appdata) {
    $scope.appData = Appdata;
  });
