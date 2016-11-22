import React, {Component} from 'react';
import {connect} from 'react-redux';


let createHandlers = (dispatch) => {
    let signupSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.signup(event.target.username.value, event.target.email.value, event.target.password.value));
        event.target.reset();

    }
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handlers = createHandlers(this.props.dispatch);
    }
    render() {
        return (
            <div>
                <Nav />
                <form id="signupForm" onSubmit={this.handlers.signupSubmit}>
                    <div id="border-signup">
                        <h1>SIGN UP</h1>
                        <input type="text" name="username" className="form-control input-sm" placeholder="Username" autoComplete="off" required/>
                        <input type="text" name="email" className="form-control input-sm" placeholder="Email Address" autoComplete="off" required/>
                        <input type="password" name="password" className="form-control input-sm" placeholder="Password" autoComplete="off" required/>
                        <input type="submit" value="Sign Up" className="btn btn-info btn-block"/>
                        <p>Already have an account? Click <a href="#/login">here</a> to login!</p>
                    </div>
                </form>
            </div>
        );
    }
}

let mapStateToProps = (state, props) => {
    return {
        signUpSuccess: state.signUpSuccess
    };
};

let Container = connect(mapStateToProps)(SignUp);
export default Container;