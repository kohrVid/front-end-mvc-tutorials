var githubViewer = angular.module("githubViewer", []);
githubViewer.controller(
  "MainController", [
    "$scope", 
    "$http",
    function (
      $scope,
      $http
    ) {
      $scope.message = "Hi,";
      
      var onUserComplete = function (response) {
        $scope.user = response.data;
      };

      var onError = function (reason) {
        $scope.error = "Could not fetch the user";
      };

      $http.get("https://api.github.com/users/kohrVid")
        .then(onUserComplete, onError);


    }
  ]
);
