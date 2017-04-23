"uses strict";
var githubViewer = angular.module("githubViewer", []);
githubViewer.controller(
  "MainController", [
    "$scope", 
    "$http",
    function (
      $scope,
      $http
    ) {
      $scope.username = "angular";
      $scope.message = "Github Viewer";
      $scope.repoSortOrder = "-stargazers_count";
      
      var onUserComplete = function (response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
          .then(onRepos, onError);
      };

      var onRepos = function (response) {
        $scope.repos = response.data;
      };

      var onError = function (reason) {
        $scope.error = "Could not fetch the user";
      };

      $scope.search = function (username) {
        $http.get(`https:\/\/api.github.com/users/${ username }`)
          .then(onUserComplete, onError);
      };


    }
  ]
);
