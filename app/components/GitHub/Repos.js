var React = require('react');
var UnorderedList = require('../UnorderedList');

var Repos =  React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    var repos = this.props.repos.map(function(repo) {
      return (<div>
          {repo.html_url && <h4><a href={repo.html_url}
              target='_blank'>{repo.name}</a></h4>}
          {repo.description && <p>{repo.description}</p>}
        </div>
      );
    });
    return (
      <div>
        <h3>User Repos</h3>
        <UnorderedList items={repos} />
       </div>
    );
  }
});

module.exports = Repos;
