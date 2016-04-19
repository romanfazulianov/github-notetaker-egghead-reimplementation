var axios = require('axios');

function getRepos(username) {
  return axios.get('http://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username) {
  return axios.get('http://api.github.com/users/' + username);
}

module.exports = {
  getGitHubData: function(username) {
    return axios.all([getRepos(username), getUserInfo(username)]).
      then(function(results) {
        return {
          repos: results[0].data,
          bio: results[1].data
        };
      });
  }
};
