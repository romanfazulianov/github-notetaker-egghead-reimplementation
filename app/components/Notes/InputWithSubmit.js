import React from 'react';

class InputWithSubmit extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var inputValue = this.refs.text.value.trim();
    if (inputValue !== '') {
      this.refs.text.value = '';
      this.props.submit(inputValue);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='input-group'>
        <input autoFocus={true}
            type='text'
            className='form-control' ref='text' placeholder={this.props.placeholder}/>
        <span className='input-group-btn'>
          <button
              className='btn btn-default'
              type='submit'
              >Submit</button>
        </span>
      </form>
    );
  }
};

InputWithSubmit.propTypes = {
  submit: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string.isRequired
};

export default InputWithSubmit;
