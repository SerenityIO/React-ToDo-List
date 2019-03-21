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
            <div id='ComentAddPanel'>
                <form onSubmit={this.props.AddComent}>
                    <textarea id='ComentName' onKeyDown={this.handleKeyDown}></textarea>
                    <button id='ComentButton' type='submit'>Add Coment</button>
                </form>
            </div>
        )
    }
}
export default withRouter(ElementComentsAddComent);