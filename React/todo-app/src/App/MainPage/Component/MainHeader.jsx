import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

class MainHeader extends React.Component {
    clickExit = () => {
        window.localStorage.removeItem("User");
        this.props.history.goBack();
    };

    addElement = (e) => {
        e.preventDefault();
        this.props.handleAddItem(this.newElementName.value);
        this.newElementName.value = '';
    };

    render() {
        return (
            <header>
                <div id='head'>
                    <h3 id='titleToDo'>To-Do List</h3>
                    <h3 id='welcome'>Welcome, <ins><b>{JSON.parse(window.localStorage.getItem('User'))}</b></ins></h3>
                    <div id='exit' onClick={this.clickExit}></div>
                </div>
                <form onSubmit={this.addElement.bind(this)}>
                    <input placeholder="Tide" required type="text" ref={(input) => { this.newElementName = input }} />
                    <button type='submit'>Add</button>
                </form>
                <menu>
                    <input type="checkbox" name="all" id="all" onChange={this.props.handleCheckAllItem} />
                    <button type="submit" onClick={this.props.handleRemoveCheckItem} id="deleteAll">Remove</button>
                </menu>
            </header>
        )
    }
}

export default withRouter(
    connect(state => ({
        store: state.list
    }),
        dispatch => ({
            handleAddItem: (name) => {
                dispatch({ type: "ADD_ELEMENT", name: name });//+
            },
            handleCheckAllItem: () => {
                dispatch({ type: "CHECK_ALL_ELEMENTS" });//+-
            },
            handleRemoveCheckItem: (id) => {
                dispatch({ type: 'REMOVE_CHECK_ELEMENTS' });//+
            }
        })
    )(MainHeader)
);