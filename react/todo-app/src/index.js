import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import reducer from './reducers';
import SignInPage from './App/SignInPage/SignInPage';
import SignUpPage from './App/SignUpPage/SignUpPage';
import MainPage from './App/MainPage/MainPage';
import ElementComments from './App/Comments/ElementComments';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Route path="/" exact component={SignInPage} />
                        <Route path="/signIn" exact component={SignInPage} />
                        <Route path="/signUp" component={SignUpPage} />
                        <Route path="/list" component={MainPage} />
                        <Route path="/elements/:ElementId/" component={ElementComments} />
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

render(<App />, document.getElementById('root'));