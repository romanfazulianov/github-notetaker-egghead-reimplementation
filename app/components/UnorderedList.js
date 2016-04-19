import React from 'react';

class UnorderedList extends React.Component {
  render() {
    var items = this.props.items.map((item, index) => (<li className='list-group-item' key={index}>{item}</li>));
    return (
      <ul className='list-group'>
        {items}
      </ul>
    );
  }
};

export default UnorderedList;
