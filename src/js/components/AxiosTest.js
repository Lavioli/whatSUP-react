import React, {Component} from 'react';
import {logIn} from '../actions/actions';
import {connect} from 'react-redux';

class AxiosTest extends Component {
  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.props)
    this.props.onSubmitLogIn(this.refs.usernameText.value, this.refs.passwordText.value);
    this.refs.usernameText.value = "";
    this.refs.passwordText.value = "";
  }

  render() {
    return (
      <div>
          <h2>Axios Login</h2>
          <form onSubmit={this.onSubmitForm.bind(this)}>
            <span>username:</span>
            <input type="text" ref="usernameText" required />
            <span>password:</span>
            <input type="text" ref="passwordText" required />
            // <input type="submit" />
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogIn: (username, password) => {
      dispatch(logIn(username, password));
    }
  }
}

export default connect(null, mapDispatchToProps)(AxiosTest);
