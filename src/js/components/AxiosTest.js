import React, {Component} from 'react';
import {register} from '../actions/user-actions';
import {logIn} from '../actions/user-actions';
import {logOut} from '../actions/user-actions';
import {connect} from 'react-redux';

class AxiosTest extends Component {
  onSubmitFormRegister(e) {
    e.preventDefault();
    this.props.onSubmitRegister(this.refs.newUsernameText.value, this.refs.newPasswordText.value);
    this.refs.usernameText.value = "";
    this.refs.passwordText.value = "";
  }


  onSubmitFormLogIn(e) {
    e.preventDefault();
    this.props.onSubmitLogIn(this.refs.usernameText.value, this.refs.passwordText.value);
    this.refs.usernameText.value = "";
    this.refs.passwordText.value = "";
  }

    onSubmitFormLogOut(e) {
    e.preventDefault();
    this.props.onSubmitLogOut('hi', 'hi');
  }

  render() {
    return (
      <div>
           <h2>Axios Register</h2>
          <form onSubmit={this.onSubmitFormRegister.bind(this)}>
            <span>username:</span>
            <input type="username" ref="newUsernameText" required />
            <span>password:</span>
            <input type="password" ref="newPasswordText" required />
            <input type="submit" />
          </form>

          <h2>Axios Login</h2>
          <form onSubmit={this.onSubmitFormLogIn.bind(this)}>
            <span>username:</span>
            <input type="username" ref="usernameText" required />
            <span>password:</span>
            <input type="password" ref="passwordText" required />
            <input type="submit" />
          </form>


          <h2>Axios Logout</h2>
          <form onSubmit={this.onSubmitFormLogOut.bind(this)}>
            <input type="submit" value="Logout" />
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitLogIn: (username, password) => {
      dispatch(logIn(username, password))
    },

    onSubmitLogOut: (badUsername, badPassword) => {
      dispatch(logOut(badUsername, badPassword))
    },

    onSubmitRegister: (username, password) => {
      dispatch(register(username, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(AxiosTest);
