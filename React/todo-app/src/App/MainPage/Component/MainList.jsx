import React from 'react';
import { withRouter } from "react-router-dom";

class MainList extends React.Component {
    goToComents = (id) => {
        this.props.history.push(`/elements/${id}`);
    };

    render() {
        return (
            <ul id='list'>
                {this.props.MyList.map((val) => (
                    <li id={val.id} key={val.id + 'item'} className={this.props.getLiClassName(val.done, val.checked)} >
                        <div className='name'>{val.name}</div>
                        <input type="checkbox" checked={val.checked} className="check" onChange={() => this.props.handleCheck(val.id)} />
                        <div className="button" onClick={() => this.props.handleRemoveItem(val.id)}></div>
                        <div className="done-edit-copy">
                            <button type="submit" className="coment" onClick={() => this.goToComents(val.id)}>Comments</button>
                            <button type="submit" className={val.done ? "undone" : "done"} onClick={() => this.props.handleDone(val.id)}>{val.done ? "Undone" : "Done"}</button>
                            <button type="submit" className="edit" onClick={() => this.props.handleEditElement(val.id)}>Edit</button>
                            <button type="submit" className="copy" onClick={() => this.props.handleCopyElement(val.id)}>Copy</button>
                        </div>
                        <div className='info'>
                            <div className='author'>
                                <p><b>Create: </b><i className='g'>{val.author}</i></p>
                                <p><b>LastChanges: </b><i className='r'>{val.LastChanges}</i></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default withRouter(MainList);