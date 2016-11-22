import React, {Component} from 'react';
import {connect} from 'react-redux';


let createHandlers = (dispatch) => {

    let logInSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.login(event.target.username.value, event.target.password.value));
    }
    return {
        logInSubmit
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.handlers = createHandlers(this.props.dispatch);
    }
    render() {
        return (
            <div>
                <Nav />
                <h1>Medication Reminder</h1>
                <form id="loginForm" onSubmit={this.handlers.logInSubmit}>
                    <div id="border-form" className="form-group">
                        <h1>LOGIN</h1>
                        <input type="text" name="username" id="username" className="form-control input-sm" placeholder="Username" autoComplete="off" required/>
                        <input type="password" name="password" className="form-control input-sm" placeholder="Password" required/>
                        <input type="submit" value="Login" className="btn btn-info btn-block"/>
                        <p>No account? Click <a href="#/signup">here</a> to register!</p>
                    </div>
                </form>
            </div>
        );
    }
}

let mapStateToProps = (state, props) => {
    return {

    };
};

let Container = connect(mapStateToProps)(Login);
export default Container;