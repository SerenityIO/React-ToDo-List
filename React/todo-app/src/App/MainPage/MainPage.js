import React from 'react';
import { withRouter } from "react-router-dom";
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
            checked: false
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
            checked: ListArray[index].checked
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

    clickExit = () => {
        window.localStorage.removeItem("User");
        this.props.history.push('/login');
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

    render() {
        let ListArray = this.state.MyList;

        window.localStorage.setItem('ListArray', JSON.stringify(ListArray));


        if (!JSON.parse(window.localStorage.getItem('User'))) {
            this.props.history.push('/login');
        }

        return (
            <main>
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
                <ul id='list'>
                    {this.state.MyList.map((val) => (
                        <li id={val.id} key={val.id + 'item'} className={this.getLiClassName(val.done, val.checked)}>{val.name}
                            <input type="checkbox" checked={val.checked} className="check" onChange={() => this.handleCheck(val.id)} />
                            <div className="button" onClick={() => this.handleRemoveItem(val.id)}></div>
                            <div className="DoneEditCopy">
                                <button type="submit" className={val.done ? "Undone" : "Done"} onClick={() => this.handleDone(val.id)}>{val.done ? "Undone" : "Done"}</button>
                                <button type="submit" className="Edit" onClick={() => this.handleEditElement(val.id)}>Edit</button>
                                <button type="submit" className="Copy" onClick={() => this.handleCopyElement(val.id)}>Copy</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        )
    };
};

export default withRouter(MainPage);

