githubViewer.controller(
  "UserController", [
    "$scope", 
    "github",
    "$routeParams",
    "$location",
    function (
      $scope,
      github,
      $routeParams,
      $location
    ) {
      var onRepos = function (data) {
        $scope.repos = data;
      };

      var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user)
          .then(onRepos, onError);
      };

      var onError = function (reason) {
        $scope.error = "Could not fetch the user";
      };

      $scope.findCollaborators = function (username, repoName) {
        $location.path(`/repos/${ username }/${ repoName }`);
      };

      $scope.username = $routeParams.username;
      $scope.repoSortOrder = "-stargazers_count";
      github.getUser($scope.username).then(onUserComplete, onError);
    }
  ]
);
