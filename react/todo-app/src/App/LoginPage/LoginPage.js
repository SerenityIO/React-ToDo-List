import React from 'react';
import { withRouter } from "react-router-dom";
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('DataBase'));

        if (arrayFromlocalStorage && arrayFromlocalStorage.length) {
            this.state = {
                DataBase: arrayFromlocalStorage
            };
        } else {
            this.state = {
                DataBase: [{
                    login: 'admin',
                    password: 'admin'
                }]
            };
        }
    }

    ViewError = (e) => {
        e.preventDefault();
        const login = e.target.elements.login.value;
        const password = e.target.elements.password.value;
        var t = 0;
        let DataBase = this.state.DataBase;
        for (var i = 0; i < DataBase.length; i++) {
            if (DataBase[i].login === login && DataBase[i].password === password) {
                t++;
                break;
            }
        }
        if (t === 1) {
            document.getElementById("err").style.display = "none";
            this.props.history.push('/list');
        } else {
            document.getElementById("err").style.display = "block";
        }
    };

    click = () => {
        this.props.history.push('/register')
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
                        <input type="password" name='password' placeholder="Password" className="password" required />
                        <br />
                        <div>
                            <button type='submit' id="SignIn">SignIn</button>
                            <button id="reg" onClick={this.click}>Register</button>
                        </div>
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