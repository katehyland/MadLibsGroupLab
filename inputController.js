var app = angular.module('MadLibs');
app.controller('inputController', function($scope, MadLibsFactory) {
  $scope.getInfo = function(){
  MadLibsFactory.nounName= $scope.nounName;
  MadLibsFactory.nounName= $scope.veryActivity;
  MadLibsFactory.nounName= $scope.nounPlace;
  MadLibsFactory.nounName= $scope.nounThing;
  MadLibsFactory.nounName= $scope.nounNewName;
}
});