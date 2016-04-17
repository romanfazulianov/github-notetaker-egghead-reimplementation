var React = require('react');
var Router = require('react-router');
var UserProfile = require('./GitHub/UserProfile');
var Repos = require('./GitHub/Repos');
var Notes = require('./Notes/Notes');

var Profile =  React.createClass({
  mixins: [Router.State],
  getInitialState: function() {
    return {
      notes: [1,2,3],
      bio: {name: this.props.params.username},
      repos: [4,5,6]
    };
  },
  render: function() {
    var username = this.state.bio.name;
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes username={username} notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
