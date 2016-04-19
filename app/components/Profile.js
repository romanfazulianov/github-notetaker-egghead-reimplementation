import React from 'react';
import {State} from 'react-router';
import UserProfile from './GitHub/UserProfile';
import Repos from './GitHub/Repos';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';
import firebaseLink from '../config/firebase';
import Rebase from 're-base';

var base = Rebase.createClass(firebaseLink);

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }

  init(username) {
    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    helpers.getGitHubData(username).then((profile) => {
      this.setState({
        bio: profile.bio,
        repos: profile.repos
      });
    });
  }

  componentDidMount() {
    this.init(this.props.params.username);
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentWillReceiveProps(nextProps) {
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }

  render() {
    var username = this.props.params.username;
    return (
      <div className='row'>
        <div className='col-md-4'>
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className='col-md-4'>
          <Repos username={username} repos={this.state.repos} />
        </div>
        <div className='col-md-4'>
          <Notes addNote={this.handleAddNote.bind(this)}
              username={username}
              notes={this.state.notes} />
        </div>
      </div>
    );
  }
};

export default Profile;
