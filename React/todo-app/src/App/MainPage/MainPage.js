import React from 'react';
import { withRouter } from "react-router-dom";
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            MyList: []
        };
    }

    handleAddItem = (e) => {
        e.preventDefault();

        this.setState({
            MyList: [
                ...this.state.MyList
            ]
        });

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


    render() {
        return (
            <main>
                <header>
                    <h3>My ToDo-List</h3>
                    <form onSubmit={this.handleAddItem}>
                        <input placeholder="Tide" required type="text" />
                        <button type='submit'>Add</button>
                    </form>
                    <menu>
                        {/* <input type="checkbox" name="all" id="all" onclick={checkAll} />
            <button type="submit" onclick={removeCheck} id="deleteAll">Remove</button> */}
                    </menu>
                </header>
                <ul id='list'>
                    {this.state.MyList.map((val) =>

                        <li id={val.id}>{val.name}
                            <input type="checkbox" className="check" />
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
                                <button type="submit" className="Edit">Edit</button>
                                <button type="submit" className="Copy">Copy</button>
                            </div>
                        </li>
                    )}
                </ul>
            </main>
        );
    };

};

export default withRouter(MainPage);