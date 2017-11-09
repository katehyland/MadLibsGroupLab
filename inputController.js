var app = angular.module('MadLibs');
app.controller('inputController', function($scope, madLibsFactory) {
  $scope.getInfo = function(){
  madLibsFactory.nounName= $scope.nounName;
  madLibsFactory.nounName= $scope.veryActivity;
  madLibsFactory.nounName= $scope.nounPlace;
  madLibsFactory.nounName= $scope.nounThing;
  madLibsFactory.nounName= $scope.nounNewName;
}
});