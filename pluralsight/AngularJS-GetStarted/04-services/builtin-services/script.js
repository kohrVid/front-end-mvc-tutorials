"use strict";
var githubViewer = angular.module("githubViewer", []);
githubViewer.controller(
  "MainController", [
    "$scope", 
    "$http",
    "$interval",
    "$log",
    "$anchorScroll",
    "$location",
    function (
      $scope,
      $http,
      $interval,
      $log,
      $anchorScroll,
      $location
    ) {
      var onUserComplete = function (response) {
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
          .then(onRepos, onError);
      };

      var onRepos = function (response) {
        $scope.repos = response.data;
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
        $http.get(`https:\/\/api.github.com/users/${ username }`)
          .then(onUserComplete, onError);
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
