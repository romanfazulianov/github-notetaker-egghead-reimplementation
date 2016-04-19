var React = require('react');
var UnorderedList = require('./UnorderedList');
var InputWithSubmit = require('./InputWithSubmit');

var Notes =  React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function() {
    var notes = this.props.notes.map(function(note) {
      return note['.value'];
    });
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <InputWithSubmit
            submit={this.props.addNote}
            placeholder='Add New Note'
        />
        <UnorderedList notes={notes} />
      </div>
    );
  }
});

module.exports = Notes;
