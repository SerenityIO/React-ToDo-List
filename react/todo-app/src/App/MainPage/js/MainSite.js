import React from 'react';
import '../css/MainSite.css';
import HeadSite from './HeadSite';
import ListSite from './ListSite';

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
                <HeadSite handleSubmit={this.handleAddItem} />
                <ListSite />
                <input value={this.state.title} onChange={this.handleChange} />
            </main>
        );
    };
};

export default MainSite;