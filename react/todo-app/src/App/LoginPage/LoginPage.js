import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {

    ViewError = async (e) => {
        e.preventDefault();

        const login = e.target.elements.login.value;
        const password = e.target.elements.password.value;

        if (password === "Admin" && login === "Admin") {
            document.getElementById("err").style.display = "none";
            alert("Work!");
        } else {
            document.getElementById("err").style.display = "block";
        }
    };

    render() {
        return (
            <LoginForm check={this.ViewError} />
        );
    };
};

export default LoginPage;