import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from 'react-dom';
import SignInPage from './App/SignInPage/SignInPage';
import SignUpPage from './App/SignUpPage/SignUpPage';
import MainPage from './App/MainPage/MainPage';
import ElementComments from './App/Comments/ElementComments';

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/" exact component={SignInPage} />
                    <Route path="/signIn" exact component={SignInPage} />
                    <Route path="/signUp" component={SignUpPage} />
                    <Route path="/list" component={MainPage} />
                    <Route path="/elements/:ElementId/" component={ElementComments} />
                </React.Fragment>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));