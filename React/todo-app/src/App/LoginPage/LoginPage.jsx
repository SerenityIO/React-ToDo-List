import React from 'react';
import { withRouter } from "react-router-dom";
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        const arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('DataBase'));

        if (arrayFromlocalStorage && arrayFromlocalStorage.length) {
            this.state = {
                DataBase: arrayFromlocalStorage
            };
        } else {
            this.state = {
                DataBase: [{
                    id: 0,
                    login: 'admin',
                    password: 'admin'
                }]
            };
        }
    }

    viewError = (e) => {
        e.preventDefault();
        const formLogin = e.target.elements.login.value;
        const password = e.target.elements.password.value;
        const dataBase = this.state.DataBase;

        for (let i = 0; i < dataBase.length; i++) {
            if (dataBase[i].login === formLogin && dataBase[i].password === password) {
                document.getElementById("error").style.display = "none";
                window.localStorage.setItem('User', JSON.stringify(formLogin));
                this.props.history.push('/list');
            } else {
                document.getElementById("error").style.display = "block";
            }
        }
    };

    click = () => {
        this.props.history.push('/register');
    };

    render() {
        window.localStorage.removeItem("User");

        return (
            <div id='body'>
                <div id='sign-in-and-sign-up'>
                    <p id='title'>Login Page</p>
                    <form id='sign-in-form' onSubmit={this.viewError}>
                        <p>Name</p>
                        <input type="text" name='login' placeholder="Name" className="login" required />
                        <p>Password</p>
                        <input type="password" name='password' placeholder="Password" className="password" required />
                        <br />
                        <div className="button-panel">
                            <button type='submit' id="sign-in">SignIn</button>
                            <button id="sign-up" onClick={this.click}>SignUp</button>
                        </div>
                    </form>
                    <div id='error'>
                        <p>Incorrect login or password</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(LoginPage);