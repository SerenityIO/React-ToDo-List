import React from 'react';
import { withRouter } from "react-router-dom";
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('ListArray'));

        if (arrayFromlocalStorage && arrayFromlocalStorage.length) {
            this.state = {
                MyList: arrayFromlocalStorage
            };
        } else {
            this.state = {
                MyList: []
            };
        }
    };

    handleAddItem = (e) => {
        e.preventDefault();
        let ListArray = this.state.MyList;

        ListArray.push({
            id: ListArray.length,
            name: e.target[0].value,
            done: false,
            checked: false
        });

        e.target.reset();
        this.setState({
            MyList: ListArray
        });
    };

    handleRemoveItem = (id) => {
        const ListArray = [...this.state.MyList];
        this.setState({
            MyList: ListArray.filter((value, index) => {
                return id !== index;
            })
        });
        
    };

    handleEditElement = (id) => {
        let ListArray = this.state.MyList;
        var newName = prompt('Write new name this row');

        if (newName !== 0) {
            ListArray[id].name = newName;
        }
        this.setState({
            MyList: ListArray
        });
    };

    handleCopyElement = (id) => {
        let ListArray = this.state.MyList;
        ListArray.push({
            id: ListArray.length,
            name: ListArray[id].name,
            done: ListArray[id].done,
            checked: ListArray[id].checked
        });
        this.setState({
            MyList: ListArray
        });
    };

    handleCheck = (id) => {
        const ListArray = [...this.state.MyList];

        ListArray[id].checked = !ListArray[id].checked;
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
            for (var i = 0; i < ListArray.length; i++) {
                ListArray[i].checked = true;
            }
        } else {
            for (var i = 0; i < ListArray.length; i++) {
                ListArray[i].checked = false;
            }
        }
        this.setState({
            MyList: ListArray
        });
    };
    handleDone = (id) => {
        const ListArray = [...this.state.MyList];
        ListArray[id].done = !ListArray[id].done;
        this.setState({
            MyList: [...ListArray]
        });

    }

    render() {
        let ListArray = this.state.MyList;
        window.localStorage.setItem('ListArray', JSON.stringify(ListArray));
        
        return (
            <main>
                <header>
                    <h3>My ToDo-List</h3>
                    <form onSubmit={this.handleAddItem}>
                        <input placeholder="Tide" required type="text" />
                        <button type='submit'>Add</button>
                    </form>
                    <menu>
                        <input type="checkbox" name="all" id="all" onClick={this.handleCheckAllItem} />
                        <button type="submit" onClick={this.handleRemoveCheckItem} id="deleteAll">Remove</button>
                    </menu>
                </header>
                <ul id='list'>
                    {this.state.MyList.map((val) => (
                    <li id={val.id} className={val.checked ? 'red' : ''}>{val.name}
                            <input type="checkbox" checked={val.checked} className="check" onClick={() => this.handleCheck(val.id)} />
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

