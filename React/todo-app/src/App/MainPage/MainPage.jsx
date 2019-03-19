import React from 'react';
import { withRouter } from "react-router-dom";
import MainHeader from "./Component/MainHeader";
import MainList from "./Component/MainList";
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('ListArray'));

        if (arrayFromlocalStorage && arrayFromlocalStorage.length) {    
            this.state = {
                MyList: arrayFromlocalStorage,
            };
        } else {
            this.state = {
                MyList: [],
            };
        }
    };

    render() {
        if (!JSON.parse(window.localStorage.getItem('User'))) {
            this.props.history.push('/login');
        }
        return (
            <main>
                <MainHeader />   
                <MainList />
            </main>
        )
    };
};

export default withRouter(MainPage);

