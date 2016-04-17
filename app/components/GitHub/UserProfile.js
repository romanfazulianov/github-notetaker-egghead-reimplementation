var React = require('react');

var UserProfile =  React.createClass({
  render: function() {
    return (
      <div>
        UserProfile Component ===> {this.props.username}
      </div>
    );
  }
});

module.exports = UserProfile;
