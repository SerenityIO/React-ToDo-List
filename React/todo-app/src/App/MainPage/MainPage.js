import React from 'react';
import { withRouter } from "react-router-dom";
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    }

    handleAddItem = (e) => {
        e.preventDefault();

        this.setState({
            list: [
                ...this.state.list,
                {
                    name: e.target[0].value,
                    done: true
                }
            ]
        });
        var ul = document.getElementById('list');

        var li = document.createElement('li');
        var check = document.createElement('input');
        var div = document.createElement('div');
        var but = document.createElement('div');
        var done = document.createElement('button');
        var edit = document.createElement('button');
        var copy = document.createElement('button');

        done.type = 'submit';

        // if (array.done) {
        //     done.innerText = 'Undone';
        //     done.className = 'Undone';
        //     li.style.backgroundColor = "rgb(193, 255, 193)";
        //     li.style.borderTop = "1px solid rgb(0, 255, 13)";
        //     li.style.borderBottom = "1px solid rgb(0, 255, 13)";
        //     li.style.height = "30px";
        // } else {
        //     done.innerText = 'Done';
        //     done.className = 'Done';
        //     li.style.backgroundColor = "";
        //     li.style.border = "";
        //     li.style.height = "";
        // }

        edit.type = 'submit';
        edit.innerText = 'Edit';
        edit.className = 'Edit';

        copy.type = 'submit';
        copy.innerText = 'Copy';
        copy.className = 'Copy';


        li.innerText = e.target[0].value;

        but.className = "DoneEditCopy";
        but.appendChild(done);
        but.appendChild(edit);
        but.appendChild(copy);
        check.type = "checkbox";
        check.className = "check";

        div.className = "button";
        li.appendChild(check);
        li.appendChild(div);
        li.appendChild(but);
        ul.appendChild(li);

        e.target.reset();
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
                    {/* <ListElement /> */}
                </ul>
            </main>
        );
    };

};

export default withRouter(MainPage);