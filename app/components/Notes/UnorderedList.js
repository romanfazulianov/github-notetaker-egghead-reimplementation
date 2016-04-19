var React = require('react');

var UnorderedList = React.createClass({
  render: function() {
    var items = this.props.notes.map(function(item, index) {
      return <li className='list-group-item' key={index}>{item}</li>;
    });
    return (
      <ul className='list-group'>
        {items}
      </ul>
    );
  }
});

module.exports = UnorderedList;
