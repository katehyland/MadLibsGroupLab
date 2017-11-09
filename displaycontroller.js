var app = angular.module('MadLibs');
app.controller('displayController', function ($scope, MadLibsFactory){
  $scope.nounName=MadLibsFactory.nounName,
  $scope.verbActivity=MadLibsFactory.verbActivity,
  $scope.nounPlace=MadLibsFactory.nounPlace,
  $scope.nounName= MadLibsFactory.nounName,
  $scope.nounThing=MadLibsFactory.nounThing,
  $scope.nounName=MadLibsFactory.nounName,
  $scope.nounNewname= MadLibsFactory.NewName
});
// app.controller('displayController', function($scope, MadLibsFactory) {
//   $scope.data = MadLibsFactory.getData();
// });