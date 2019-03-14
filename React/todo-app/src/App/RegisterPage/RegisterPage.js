import React from 'react';
import { withRouter } from "react-router-dom";
import './RegisterPage.css';

class RegisterPage extends React.Component {
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
                    id: 0,
                    login: 'admin',
                    password: 'admin'
                }]
            };
        }
    }

    register = (e) => {
        e.preventDefault();

        const FormLogin = e.target.elements.login.value;
        const FormPassword = e.target.elements.password.value;
        const FormPassword2 = e.target.elements.password2.value;

        if (FormPassword === FormPassword2) {
            document.getElementById("err").style.display = "none";
            let DataBase = this.state.DataBase;
            DataBase.push(
                {
                    id: DataBase.length,
                    login: FormLogin,
                    password: FormPassword
                }
            )
            window.localStorage.setItem('DataBase', JSON.stringify(DataBase));
            this.props.history.push('/login');
        } else {
            document.getElementById("err").style.display = "block";
        }
    };

    render() {
        return (
            <div id='body'>
                <div>
                    <p id='title'>Register Page</p>
                    <form id='LandP' onSubmit={this.register}>
                        <p>Name</p>
                        <input type="text" name='login' placeholder="Name" id="login" required />
                        <p>Password</p>
                        <input type="password" name='password' placeholder="Password" className="password" required />
                        <p>Repete password</p>
                        <input type="password" name='password2' placeholder="Repete password" className="password" required />
                        <br />
                        <button type='submit' id="SignIn">Register</button>
                    </form>
                    <div id='err'>
                        <p>Invalid password</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(RegisterPage);