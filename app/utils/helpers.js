import axios from 'axios';

function getRepos(username) {
  return axios.get(`http://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
  return axios.get(`http://api.github.com/users/${username}`);
}

const helpers = {
  getGitHubData(username) {
    return axios.all([getRepos(username), getUserInfo(username)]).
    then((results) => {
      return {
        repos: results[0].data,
        bio: results[1].data
      };
    });
  }
};

export default helpers;
