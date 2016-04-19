var React = require('react');
var Router = require('react-router');
var UserProfile = require('./GitHub/UserProfile');
var Repos = require('./GitHub/Repos');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile =  React.createClass({
  mixins: [Router.State, ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [],
      bio: {name: this.props.params.username},
      repos: [4,5,6]
    };
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://glaring-inferno-4191.firebaseio.com/');
    var childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  handleAddNote: function(newNote) {
    this.firebaseRefs.notes.push(newNote);
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
          <Notes addNote={this.handleAddNote}
              username={username}
              notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

module.exports = Profile;
