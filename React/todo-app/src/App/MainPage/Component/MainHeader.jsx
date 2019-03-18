import React from 'react';

class MainHeader extends React.Component {
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

    clickExit = () => {
        window.localStorage.removeItem("User");
        this.props.history.push('/login');
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
            edit: 'Is not edit!'
        });
        ID++;
        window.localStorage.setItem('ID', JSON.stringify(ID));
        e.target.reset();
        this.setState({
            MyList: ListArray,
            individualId: ID
        });
    };

    render() {
        let ListArray = this.state.MyList;
        window.localStorage.setItem('ListArray', JSON.stringify(ListArray));

        return (
            <header>
                <div id='head'>
                    <h3 id='titleToDo'>My ToDo-List</h3>
                    <h3 id='welcome'>Welcome, <ins><b>{JSON.parse(window.localStorage.getItem('User'))}</b></ins></h3>
                    <div id='exit' onClick={this.clickExit}></div>
                </div>
                <form onSubmit={this.handleAddItem}>
                    <input placeholder="Tide" required type="text" />
                    <button type='submit'>Add</button>
                </form>
                <menu>
                    <input type="checkbox" name="all" id="all" onChange={this.handleCheckAllItem} />
                    <button type="submit" onClick={this.handleRemoveCheckItem} id="deleteAll">Remove</button>
                </menu>
            </header>
        )
    }
}
export default MainHeader;