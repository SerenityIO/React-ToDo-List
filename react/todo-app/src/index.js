import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from 'react-dom';
import LoginPage from './App/LoginPage/LoginPage';
import MainPage from './App/MainPage/MainPage';
import RegisterPage from './App/RegisterPage/RegisterPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/list" component={MainPage} />
                </React.Fragment>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));