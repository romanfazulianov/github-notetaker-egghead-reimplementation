var React = require('react');
var Router = require('react-router');
var UserProfile = require('./GitHub/UserProfile');
var Repos = require('./GitHub/Repos');
var Notes = require('./Notes/Notes');

var Profile =  React.createClass({
  mixins: [Router.State],
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    };
  },
  render: function() {
    console.log(this);
    var username = this.props.params.username;
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} />
        </div>
        <div className='col-md-4'>
          <Repos />
        </div>
        <div className='col-md-4'>
          <Notes />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
