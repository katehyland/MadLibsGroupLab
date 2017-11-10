// var app = angular.module('MadLibs');
// app.controller('inputController', function($scope, MadLibsFactory) {
//   $scope.getInfo = function(){
//   MadLibsFactory.nounName= $scope.nounName;
//   MadLibsFactory.nounName= $scope.verbActivity;
//   MadLibsFactory.nounName= $scope.nounPlace;
//   MadLibsFactory.nounName= $scope.nounThing;
//   MadLibsFactory.nounName= $scope.nounNewName;
// }
// });


var app = angular.module('MadLibs');
app.controller('inputController', function($scope, MadLibsFactory) {
  $scope.save= function(){
  MadLibsFactory.nounName= $scope.nounName,
  MadLibsFactory.verbActivity= $scope.verbActivity,
  MadLibsFactory.nounPlace= $scope.nounPlace,
  MadLibsFactory.nounThing= $scope.nounThing,
  MadLibsFactory.nounNewName= $scope.nounNewName
  }
});