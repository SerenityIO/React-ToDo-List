import React from 'react';
import './MainPage.css';
import HeadPage from './components/HeadPage';
import List from './components/List';

class MainSite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Hello',
            list: []
        };
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleAddItem = (e) => {
        e.preventDefault();
        this.setState({
            list: [
                ...this.state.list,
                {
                    
                }
            ]
        });
    }

    render() {
        return (
            <main>
                <HeadPage handleSubmit={this.handleAddItem} />
                <List />
                <input value={this.state.title} onChange={this.handleChange} />
            </main>
        );
    };
};

export default MainSite;