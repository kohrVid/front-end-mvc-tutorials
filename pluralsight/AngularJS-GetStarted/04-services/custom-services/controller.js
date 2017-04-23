githubViewer.controller(
  "MainController", [
    "$scope", 
    "github",
    "$interval",
    "$log",
    "$anchorScroll",
    "$location",
    function (
      $scope,
      github,
      $interval,
      $log,
      $anchorScroll,
      $location
    ) {
      var onUserComplete = function (data) {
        $scope.user = data;
        github.getRepos($scope.user)
          .then(onRepos, onError);
      };

      var onRepos = function (data) {
        $scope.repos = data;
        $location.hash("user-details");
        $anchorScroll();
      };

      var onError = function (reason) {
        $scope.error = "Could not fetch the user";
      };

      var decrementCountdown = function () {
        $scope.countdown -= 1;
        if ($scope.countdown < 1) {
          $log.info(`Searching for ${ $scope.username }`);
          $scope.search($scope.username);
        }
      };

      var startCountdown = function () {
        countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
      };

      $scope.search = function (username) {
        github.getUser(username).then(onUserComplete, onError);
        if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
        }
      };

      $scope.username = "angular";
      $scope.message = "Github Viewer";
      $scope.repoSortOrder = "-stargazers_count";
      $scope.countdown = 5;
      var countdownInterval = null;
      startCountdown();
    }
  ]
);
