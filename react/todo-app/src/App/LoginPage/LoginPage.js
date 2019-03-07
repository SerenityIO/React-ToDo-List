import React from 'react';
import { withRouter } from "react-router-dom";
  
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    ViewError = (e) => {
        e.preventDefault();

        const login = e.target.elements.login.value;
        const password = e.target.elements.password.value;

        if (password === "Admin" && login === "Admin") {
            document.getElementById("err").style.display = "none";
            this.props.history.push('/list');
        } else {
            document.getElementById("err").style.display = "block";
        }
    };

    render() {
        return (
            <div id='body'>
                <div>
                    <p id='title'>Login Page</p>
                    <form id='LandP' onSubmit={this.ViewError}>
                        <p>Name</p>
                        <input type="text" name='login' placeholder="Name" id="login" required />
                        <p>Password</p>
                        <input type="password" name='password' placeholder="Password" id="password" required />
                        <br />
                        <button type='submit' id="SignIn">SignIn</button>
                    </form>
                    <div id='err'>
                        <p>Incorrect login or password</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(LoginPage);