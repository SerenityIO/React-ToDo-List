import React from 'react';
import { withRouter } from "react-router-dom";

class ElementComentsAddComent extends React.Component {

    handleKeyDown = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            if (event.target.value.length !== 0) {
                event.target.form[1].click();
            }
        }
    }
    render() {
        return (
            <div id='coment-add-panel'>
                <form onSubmit={this.props.addComent}>
                    <textarea id='coment-name' onKeyDown={this.handleKeyDown} required></textarea>
                    <button id='coment-button' type='submit'>Add Coment</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ElementComentsAddComent);