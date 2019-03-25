import React from 'react';
import { withRouter } from "react-router-dom";
import './SignUpPage.css';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        const arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('DataBase'));

        if (arrayFromlocalStorage && arrayFromlocalStorage.length) {
            this.state = {
                dataBase: arrayFromlocalStorage
            };
        } else {
            this.state = {
                dataBase: [{
                    id: 0,
                    login: 'admin',
                    password: 'admin'
                }]
            };
        }
    }

    signUp = (e) => {
        e.preventDefault();

        const formLogin = e.target.elements.login.value;
        const formPassword1 = e.target.elements.password1.value;
        const formPassword2 = e.target.elements.password2.value;

        if (formPassword1 === formPassword2) {
            document.getElementById("error").style.display = "none";
            const { dataBase } = this.state;

            dataBase.push({
                id: dataBase.length,
                login: formLogin,
                password: formPassword1
            })

            window.localStorage.setItem('DataBase', JSON.stringify(dataBase));
            this.props.history.push('/signIn');
        } else {
            document.getElementById("error").style.display = "block";
        }
    };

    backToLoginPage = () => {
        this.props.history.goBack();
    };

    render() {
        window.localStorage.removeItem("User");

        return (
            <div id='body'>
                <div id='sign-in-and-sign-up'>
                    <p id='title'>Sign Up Page</p>
                    <form id='sign-up-form' onSubmit={this.signUp}>
                        <p>Name</p>
                        <input type="text" name='login' placeholder="Name" className="login" required />
                        <p>Password</p>
                        <input type="password" name='password1' placeholder="Password" className="password" required />
                        <p>Repeate password</p>
                        <input type="password" name='password2' placeholder="Repete password" className="password" required />
                        <br />
                        <div className="button-panel">
                            <button type='submit' id="sign-up">SignUp</button>
                            <div id='back' onClick={this.backToLoginPage}></div>
                        </div>
                    </form>
                    <div id='error'>
                        <p><b>Wrong password</b></p>
                    </div>
                </div>
            </div>
        );
    };
};

export default withRouter(SignUpPage);