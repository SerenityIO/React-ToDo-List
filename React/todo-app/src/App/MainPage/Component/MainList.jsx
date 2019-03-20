import React from 'react';
import { withRouter } from "react-router-dom";

class MainList extends React.Component {
    GoToComents = (id) => {
        this.props.history.push(`/elements/${id}`);
    };

    render() {
        return (
            <ul id='list'>
                {this.props.MyList.map((val) => (
                    <li id={val.id} key={val.id + 'item'} className={this.props.getLiClassName(val.done, val.checked)} >
                        <div id='name'>{val.name}</div>
                        <input type="checkbox" checked={val.checked} className="check" onChange={() => this.props.handleCheck(val.id)} />
                        <div className="button" onClick={() => this.props.handleRemoveItem(val.id)}></div>
                        <div className="DoneEditCopy">
                        <button type="submit" onClick={() => this.GoToComents(val.id)}>Coments</button>
                            <button type="submit" className={val.done ? "Undone" : "Done"} onClick={() => this.props.handleDone(val.id)}>{val.done ? "Undone" : "Done"}</button>
                            <button type="submit" className="Edit" onClick={() => this.props.handleEditElement(val.id)}>Edit</button>
                            <button type="submit" className="Copy" onClick={() => this.props.handleCopyElement(val.id)}>Copy</button>
                        </div>
                        <div id='info'>
                            <div id='author'>
                                <p><b>Create: </b><i id='g'>{val.author}</i></p>
                                <p><b>LastChanges: </b><i id='r'>{val.LastChanges}</i></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default withRouter(MainList);