import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MainHeader from "./Component/MainHeader";
import MainList from "./Component/MainList";
import './MainPage.css';

class MainPage extends React.Component {

    componentDidUpdate() {
        window.localStorage.setItem('ListArray', JSON.stringify(this.props.store));
    }

    render() {
        if (!JSON.parse(window.localStorage.getItem('User'))) {
            this.props.history.push('/signIn');
        }
        return (
            <main>
                <MainHeader />
                <MainList />
            </main>
        )
    };
};

export default withRouter(
    connect(state => ({
        store: state.list
    }),
        dispatch => ({})
    )(MainPage)
);

