"use strict";

var githubViewer = angular.module("githubViewer", ["ngRoute"]);

githubViewer.config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/users/:username", {
          templateUrl: "user.html",
          controller: "UserController"
        })
        .when("/repos/:username/:reponame", {
          templateUrl: "repo.html",
          controller: "RepoController"
        })
        .otherwise({
          redirectTo: "/main"
        });
    }
]);
