var React = require('react');

var InputWithSubmit = React.createClass({
  propTypes: {
    submit: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string.isRequired
  },
  handleSubmit: function() {
    var inputValue = this.refs.text.value.trim();
    if (inputValue !== '') {
      this.refs.text.value = '';
      this.props.submit(inputValue);
    }
  },
  render: function() {
    return (
      <div className='input-group'>
        <input
            type='text'
            className='form-control' ref='text' placeholder={this.props.placeholder}/>
        <span className='input-group-btn'>
          <button
              className='btn btn-default'
              type='button'
              onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }
});

module.exports = InputWithSubmit;
