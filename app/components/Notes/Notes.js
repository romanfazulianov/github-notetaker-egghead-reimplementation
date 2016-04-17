var React = require('react');

var Notes =  React.createClass({
  render: function() {
    return (
      <div>
        <h4>Notes for User</h4>
        Username: {this.props.username} <br />
        Notes: <pre>{JSON.stringify(this.props.notes)}</pre>
      </div>
    );
  }
});

module.exports = Notes;
