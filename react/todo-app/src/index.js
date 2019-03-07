import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from 'react-dom';
import LoginPage from './App/LoginPage/LoginPage';
import MainSite from './App/MainPage/js/MainSite';

class App extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/list" component={MainSite} />
                </React.Fragment>  
            </Router>
        );

    }
}

render(<App />, document.getElementById('root'));