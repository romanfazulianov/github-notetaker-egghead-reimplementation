import React from 'react';

class SearchGithub extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var username = this.refs.username.value;
    this.refs.username.value = '';
    this.context.router.push(`profile/${username}`);
  }
  render() {
    return (
      <div className='col-sm-12'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div  className='form-group col-sm-7'>
            <input autoFocus={true}
                type='text'
                className='form-control'
                ref='username'/>
          </div>
          <div  className='form-group col-sm-5'>
            <button
                type='submit'
                className='btn btn-block btn-primary'
                > Search GitHub</button>
          </div>
        </form>
      </div>
    );
  }
};

SearchGithub.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default SearchGithub;
