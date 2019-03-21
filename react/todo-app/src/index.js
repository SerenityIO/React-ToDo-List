import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from 'react-dom';
import LoginPage from './App/LoginPage/LoginPage';
import MainPage from './App/MainPage/MainPage';
import SignUpPage from './App/SignUpPage/SignUpPage';
import ElementComments from './App/Comments/ElementComments';

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/signUp" component={SignUpPage} />
                    <Route path="/list" component={MainPage} />
                    <Route path="/elements/:ElementId/" component={ElementComments} />
                </React.Fragment>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));