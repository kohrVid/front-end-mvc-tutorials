var app = angular.module("app", []);
app.controller("MainController", function ($scope) {
  $scope.message = "Hi!";
  var person = {
    firstName: "Mali",
    lastName: "Madagascar",
    imageSrc: "mali.jpg"
  };
  $scope.person = person;
});
