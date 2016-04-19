var React = require('react');

var SearchGithub = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  handleSubmit: function(e) {
    //e.preventDefault();
    var username = this.refs.username.value;
    this.refs.username.value = '';
    this.context.router.push('profile/' + username);
  },
  render: function() {
    return (
      <div className='col-sm-12'>
        <form onSubmit={this.handleSubmit}>
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
});

module.exports = SearchGithub;
