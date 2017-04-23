"use strict";

githubViewer.controller(
  "MainController", [
    "$scope", 
    "$interval",
    "$log",
    "$location",
    function (
      $scope,
      $interval,
      $log,
      $location
    ) {
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
        if (countdownInterval) {
          $interval.cancel(countdownInterval);
          $scope.countdown = null;
        }
        $location.path(`/users/${ username }`);
      };

      $scope.username = "angular";
      $scope.countdown = 5;
      var countdownInterval = null;
      startCountdown();
    }
  ]
);
