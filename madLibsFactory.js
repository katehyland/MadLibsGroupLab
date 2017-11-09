var app = angular.module('MadLibs');
app.factory ('MadLibsFactory', function (){
var newLibs= [];
return{
  getLibs
}

function getLibs () {
  if (newLibs.length) {
    return Promise.resolve(newLibs);
  }
var url='/index.html';
return $http.get(url).then(function(response){
  newLibs= response.getInfo;
  return newLibs;
}).catch(function (err){
  console.log(err);
});
};

});
// $http.get('/Users/davidpotter/Desktop/MadLibsAngLab/input.html').then(function (response){
  // data = response;
  // });
  // return {
  //   getData: function () {
  //     return data;
  //   }
  // };
  // });