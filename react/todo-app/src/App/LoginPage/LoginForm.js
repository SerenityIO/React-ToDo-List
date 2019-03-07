import React from 'react';
import './LoginPage.css';
import MainSite from '../MainPage/js/MainSite';

const LoginForm = () => (
    <div id="body">
        <div>
            <p class="title">Login Page</p>
            <div id="LandP">
                <p>Name</p>
                <input type="text" placeholder="Name" id="login" />
                <p>Password</p>
                <input type="text" placeholder="Password" id="password" />
                <br />
                <input type="button" value="Sign in" id="SignIn" onclick={() => {
                    if ((document.getElementById("login").value === "admin") && (document.getElementById("password").value === "admin")) {
                        alert("fw");
                    } else {
                        alert("fw");                        
                    };
                }} />
            </div>
            <div id="err">
                <p>Incorrect login or password</p>
            </div>
        </div>
    </div>
);

// function SignIn() {
//     if ((document.getElementById("login").value === "admin") && (document.getElementById("password").value === "admin")) {
//         MainSite();
//     } else ViewError();
// };

// function ViewError() {
//     document.getElementById("err").style.display = "block";
// };
// function HiteError() {
//     document.getElementById("err").style.display = "none";
// };

export default LoginForm;