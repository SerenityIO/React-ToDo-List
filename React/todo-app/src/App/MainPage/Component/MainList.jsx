import React from 'react';

class MainList extends React.Component {
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
            ListArray[index].edit = JSON.parse(window.localStorage.getItem('User'));
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
            edit: 'Is not edit!'
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

    render() {
        let ListArray = this.state.MyList;
        window.localStorage.setItem('ListArray', JSON.stringify(ListArray));

        return (
            <ul id='list'>
                {this.state.MyList.map((val) => (
                    <li id={val.id} key={val.id + 'item'} className={this.getLiClassName(val.done, val.checked)}>
                        <div id='name'>{val.name}</div>
                        <input type="checkbox" checked={val.checked} className="check" onChange={() => this.handleCheck(val.id)} />
                        <div className="button" onClick={() => this.handleRemoveItem(val.id)}></div>
                        <div className="DoneEditCopy">
                            <button type="submit" className={val.done ? "Undone" : "Done"} onClick={() => this.handleDone(val.id)}>{val.done ? "Undone" : "Done"}</button>
                            <button type="submit" className="Edit" onClick={() => this.handleEditElement(val.id)}>Edit</button>
                            <button type="submit" className="Copy" onClick={() => this.handleCopyElement(val.id)}>Copy</button>
                        </div>
                        <div id='info'>
                            <div id='author'>
                                <p><b>Create: </b><i id='g'>{val.author}</i></p>
                                <p><b>Edit: </b><i id='r'>{val.edit}</i></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MainList;