import React from 'react';
import UnorderedList from '../UnorderedList';
import InputWithSubmit from './InputWithSubmit';

class Notes extends React.Component {
  render() {
    var notes = this.props.notes;
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <InputWithSubmit
            submit={this.props.addNote}
            placeholder='Add New Note'
        />
        <UnorderedList items={notes} />
      </div>
    );
  }
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;
