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
            done: false
        });

        e.target.reset();
        this.setState({
            MyList: ListArray
        });
    };

    handleRemoveItem = (id) => {
        let ListArray = this.state.MyList;
        ListArray = ListArray.filter(function (value, index) {
            return id !== index;
        });
        for (var i = 0; i < ListArray.length; i++) {
            ListArray[i].id = i;
        }
        this.setState({
            MyList: ListArray
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
            done: ListArray[id].done
        });
        this.setState({
            MyList: ListArray
        });
    };

    handleCheck = (id) => {
        var li = document.getElementsByTagName('li');
        var box = document.getElementsByClassName('check');

        li[id].className = (box[id].checked) ? 'red' : '';
    };

    handleRemoveCheckItem = (id) => {
        let ListArray = this.state.MyList;
        var box = document.getElementsByClassName('check');
        var MainCheck = document.getElementById('all');
        var li = document.getElementsByTagName('li');

        ListArray = ListArray.filter(function (value, index) {
            return !box[index].checked;
        });
        for (var i = 0; i < ListArray.length; i++) {
            ListArray[i].id = i;
            box[i].checked = false;
            li[i].className = (box[i].checked) ? 'red' : '';
        }
        MainCheck.checked = false;
        this.setState({
            MyList: ListArray
        });
    };

    handleCheckAllItem = () => {
        var check = document.getElementsByClassName('check');
        var all = document.getElementById('all');

        if (all.checked) {
            for (var i = 0; i < check.length; i++) {
                var per = check[i].parentNode;

                check[i].checked = true;
                per.className = 'red';
            }
        } else {
            for (var i = 0; i < check.length; i++) {
                var per = check[i].parentNode;

                check[i].checked = false;
                per.className = '';
            }
        }
    };

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
                        <input type="checkbox" name="all" id="all" onClick={() => {
                            var check = document.getElementsByClassName('check');
                            var all = document.getElementById('all');

                            if (all.checked) {
                                for (var i = 0; i < check.length; i++) {
                                    var per = check[i].parentNode;

                                    check[i].checked = true;
                                    per.className = 'red';
                                }
                            } else {
                                for (var i = 0; i < check.length; i++) {
                                    var per = check[i].parentNode;

                                    check[i].checked = false;
                                    per.className = '';
                                }
                            }
                        }} />
                        <button type="submit" onClick={() => {
                            let ListArray = this.state.MyList;
                            var box = document.getElementsByClassName('check');
                            var MainCheck = document.getElementById('all');
                            var li = document.getElementsByTagName('li');

                            ListArray = ListArray.filter(function (value, index) {
                                return !box[index].checked;
                            });
                            for (var i = 0; i < ListArray.length; i++) {
                                ListArray[i].id = i;
                                box[i].checked = false;
                                li[i].className = (box[i].checked) ? 'red' : '';
                            }
                            MainCheck.checked = false;
                            this.setState({
                                MyList: ListArray
                            });
                        }
                        } id="deleteAll">Remove</button>
                    </menu>
                </header>
                <ul id='list'>
                    {this.state.MyList.map((val) =>

                        <li id={val.id}>{val.name}
                            <input type="checkbox" className="check" onClick={() => {
                                var li = document.getElementsByTagName('li');
                                var box = document.getElementsByClassName('check');

                                li[val.id].className = (box[val.id].checked) ? 'red' : '';
                            }} />
                            <div className="button" onClick={() => {
                                let ListArray = this.state.MyList;
                                ListArray = ListArray.filter(function (value, index) {
                                    return val.id !== index;
                                });
                                for (var i = 0; i < ListArray.length; i++) {
                                    ListArray[i].id = i;
                                }
                                this.setState({
                                    MyList: ListArray
                                });
                            }}></div>
                            <div className="DoneEditCopy">
                                <button type="submit" className="Done">Done</button>
                                <button type="submit" className="Edit" onClick={() => {
                                    let ListArray = this.state.MyList;

                                    var newName = prompt('Write new name this row');
                                    if (newName !== 0) {
                                        ListArray[val.id].name = newName;
                                    }
                                    this.setState({
                                        MyList: ListArray
                                    });
                                }}>Edit</button>
                                <button type="submit" className="Copy" onClick={() => {
                                    let ListArray = this.state.MyList;
                                    ListArray.push({
                                        id: ListArray.length,
                                        name: ListArray[val.id].name,
                                        done: ListArray[val.id].done
                                    });
                                    this.setState({
                                        MyList: ListArray
                                    });
                                }}>Copy</button>
                            </div>
                        </li>
                    )}
                </ul>
            </main>
        );
    };

};

export default withRouter(MainPage);