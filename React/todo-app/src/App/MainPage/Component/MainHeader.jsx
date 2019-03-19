import React from 'react';

class MainHeader extends React.Component {
    render() {

        return (
            <header>
                <div id='head'>
                    <h3 id='titleToDo'>My ToDo-List</h3>
                    <h3 id='welcome'>Welcome, <ins><b>{JSON.parse(window.localStorage.getItem('User'))}</b></ins></h3>
                    <div id='exit' onClick={this.props.clickExit}></div>
                </div>
                <form onSubmit={this.props.handleAddItem}>
                    <input placeholder="Tide" required type="text" />
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
export default MainHeader;