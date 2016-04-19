var React = require('react');

var Repos =  React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div>
        <h4>User Repos</h4>
        Username: {this.props.username} <br />
        Repos: <pre>{JSON.stringify(this.props.repos)}</pre>
       </div>
    );
  }
});

module.exports = Repos;
