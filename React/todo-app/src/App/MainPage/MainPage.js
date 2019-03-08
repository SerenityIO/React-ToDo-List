import React from 'react';
import './MainPage.css';
import HeadPage from './components/HeadPage';
import List from './components/List';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [{
                name: 'Test 1',
                done: false
            }, {
                name: 'Test 2',
                done: false
            }, {
                name: 'Test 3',
                done: false
            }]
        };
    }

    // handleChange = (e) => {
    //     this.setState({
    //         title: e.target.value
    //     });
    // }

    // handleAddItem = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         list: [
    //             ...this.state.list,
    //             {

    //             }
    //         ]
    //     });
    // }

    render() {
        return (
            <main>
                <HeadPage />
                <List />
            </main>
        );
    };
};

export default MainPage;