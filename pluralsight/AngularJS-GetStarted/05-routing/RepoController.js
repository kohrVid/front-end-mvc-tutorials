githubViewer.controller(
  "RepoController", [
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
      var onCollaborators = function (data) {
        $scope.collaborators = data;
        $scope.openIssuesCount = $scope.repo.open_issues_count;
      };

      var onRepoComplete = function (data) {
        $scope.repo = data;
        github.getCollaborators($scope.repo)
          .then(onCollaborators, onError);
      };

      var onError = function (reason) {
        $scope.error = "Could not fetch repo";
      };

      $scope.findCollaborators = function (username, repoName) {
        $location.path(`/repos/${ username }/${ repoName }`);
      };

      $scope.repoName = $routeParams.reponame;
      $scope.username = $routeParams.username;
      $scope.collaboratorSortOrder = "+login";
      github.getRepo($scope.username, $scope.repoName).then(onRepoComplete, onError);
    }
  ]
);
