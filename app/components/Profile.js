var React = require('react');
var Router = require('react-router');
var UserProfile = require('./GitHub/UserProfile');
var Repos = require('./GitHub/Repos');
var Notes = require('./Notes/Notes');
var getGitHubData = require('../utils/helpers').getGitHubData;
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile =  React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [],
      bio: {},
      repos: []
    };
  },
  init: function(username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    getGitHubData(username).then((function(profile) {
      this.setState({
        bio: profile.bio,
        repos: profile.repos
      });
    }).bind(this));
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://glaring-inferno-4191.firebaseio.com/');
    this.init(this.props.params.username);
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  componentWillReceiveProps: function(nextProps) {
    console.log(arguments);
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  handleAddNote: function(newNote) {
    this.firebaseRefs.notes.push(newNote);
  },
  render: function() {
    var username = this.props.params.username;
    console.log(username, 'in render');
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes addNote={this.handleAddNote}
              username={username}
              notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
