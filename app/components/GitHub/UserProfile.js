var React = require('react');

var UserProfile =  React.createClass({
  render: function() {
    return (
      <div>
        <h4>User Profile</h4>
        Username: {this.props.username} <br />
        Bio: <pre>{JSON.stringify(this.props.bio)}</pre>
      </div>
    );
  }
});

module.exports = UserProfile;
