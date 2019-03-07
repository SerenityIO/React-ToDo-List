import React from 'react';
import './LoginPage.css';

class LoginForm extends React.Component {
    render() {
        return (
            <div id='body'>
                <div>
                    <p id='title'>Login Page</p>
                    <form id='LandP' onSubmit={this.props.ViewError} method='post'>
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
    }
}

export default LoginForm;

// const LoginForm = () => (
//     <div id="body">
//         <div>
//             <p id="title">Login Page</p>
// //             <div id="LandP">
//                 <p>Name</p>
//                 <input type="text" placeholder="Name" id="login" required />
//                 <p>Password</p>
//                 <input type="text" placeholder="Password" id="password" required />
//                 <br />
//                 <button id="SignIn" onClick = { () =>{
//                     if ((log === "admin") && (pas === "admin")){
//                     alert('aaa');
//                 }
//             }
//                 }>SignIn</button>
//             </div>
//         </div>
//     </div>
// );

// // function SignIn() {
// //     if ((document.getElementById("login").value === "admin") && (document.getElementById("password").value === "admin")) {
// //         MainSite();
// //     } else ViewError();
// // };

// // function ViewError() {
// //     document.getElementById("err").style.display = "block";
// // };
// // function HiteError() {
// //     document.getElementById("err").style.display = "none";
// // };


