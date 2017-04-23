"use strict";

githubViewer.service(
  "github", [
    "$http",
    function (
      $http
    ) {
      var getUser = function (username) {
        return $http.get(`https:\/\/api.github.com/users/${ username }`)
          .then(function (response) {
            return response.data;
          });
      }

      var getRepos = function (user) {
        return $http.get(user.repos_url)
          .then(function (response) {
            return response.data;
          });
      };

      //Define your public-facing API
      return {
        getUser: getUser,
        getRepos: getRepos
      }
    }
  ]
); 
