import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
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


    handleRemoveCheckItem = () => {
        const ListArray = [...this.state.MyList];
        this.setState({
            MyList: ListArray.filter((value) => {
                return !value.checked;
            })
        });
    };

    handleCheckAllItem = () => {
        const ListArray = [...this.state.MyList];
        var all = document.getElementById('all');

        if (all.checked) {
            for (let i = 0; i < ListArray.length; i++) {
                ListArray[i].checked = true;
            }
        } else {
            for (let i = 0; i < ListArray.length; i++) {
                ListArray[i].checked = false;
            }
        }
        this.setState({
            MyList: ListArray
        });
    };

    handleAddItem = (e) => {
        e.preventDefault();
        const ListArray = this.state.MyList;
        if (ListArray.length === 0) {
            let i = 0;
            window.localStorage.setItem('ID', JSON.stringify(i));
        };

        let ID = JSON.parse(window.localStorage.getItem('ID'));
        ListArray.push({
            id: ID,
            name: e.target[0].value,
            done: false,
            checked: false,
            author: JSON.parse(window.localStorage.getItem('User')),
            LastChanges: 'Is not edit!',
            comments: []
        });
        ID++;
        window.localStorage.setItem('ID', JSON.stringify(ID));
        e.target.reset();
        this.setState({
            MyList: ListArray,
            individualId: ID
        });
    };

    handleRemoveItem = (id) => {
        const ListArray = [...this.state.MyList];
        const item = ListArray.find((value) => {
            return value.id === id;
        })
        this.setState({
            MyList: ListArray.filter((value) => {
                return item.id !== value.id;
            })
        });
    };

    handleEditElement = (id) => {
        let ListArray = this.state.MyList;
        var newName = prompt('Write new name this row');
        const index = ListArray.findIndex((value) => {
            return value.id === id;
        });

        if (newName !== 0) {
            ListArray[index].name = newName;
            ListArray[index].LastChanges = JSON.parse(window.localStorage.getItem('User'));
        }
        this.setState({
            MyList: ListArray
        });
    };

    handleCopyElement = (id) => {
        const ListArray = this.state.MyList;
        let ID = JSON.parse(window.localStorage.getItem('ID'));
        const index = ListArray.findIndex((value) => {
            return value.id === id;
        });

        ListArray.push({
            id: ID,
            name: ListArray[index].name,
            done: ListArray[index].done,
            checked: ListArray[index].checked,
            author: ListArray[index].author,
            LastChanges: 'Is not edit!',
            comments: ListArray[index].comments
        });
        ID++;
        window.localStorage.setItem('ID', JSON.stringify(ID));
        this.setState({
            MyList: ListArray,
            individualId: ID
        });
    };

    handleCheck = (id) => {
        const ListArray = [...this.state.MyList];
        const index = ListArray.findIndex((value) => {
            return value.id === id;
        });
        ListArray[index].checked = !ListArray[index].checked;
        this.setState({
            MyList: [...ListArray]
        });
    };

    handleDone = (id) => {
        const ListArray = [...this.state.MyList];
        const index = ListArray.findIndex((value) => {
            return value.id === id;
        });
        ListArray[index].done = !ListArray[index].done;
        this.setState({
            MyList: [...ListArray]
        });
    };

    getLiClassName = (done, checked) => {
        let className = '';
        if (checked) {
            className += ' red';
        }
        if (done) {
            className += ' green';
        }
        return className;
    }

    
    componentDidUpdate(){
        window.localStorage.setItem('ListArray', JSON.stringify(this.props.store));
    }

    render() {
        let ListArray = this.state.MyList;
        window.localStorage.setItem('ListArray', JSON.stringify(ListArray));

        if (!JSON.parse(window.localStorage.getItem('User'))) {
            this.props.history.push('/signIn');
        }
        return (
            <main>
                <MainHeader
                    // handleAddItem={this.handleAddItem}
                    // handleCheckAllItem={this.handleCheckAllItem}
                    // handleRemoveCheckItem={this.handleRemoveCheckItem}
                />
                <MainList
                    // MyList={this.state.MyList}
                    // getLiClassName={this.getLiClassName}
                    // handleCheck={this.handleCheck}
                    // handleRemoveItem={this.handleRemoveItem}
                    // handleDone={this.handleDone}
                    // handleEditElement={this.handleEditElement}
                    // handleCopyElement={this.handleCopyElement}
                />
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

