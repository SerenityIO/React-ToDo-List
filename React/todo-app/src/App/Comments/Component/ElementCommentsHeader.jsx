import React from 'react';
import { withRouter } from "react-router-dom";

class ElementCommentsHeader extends React.Component {
    backToList = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div id='header'>
                <div id='name-block'>
                    <h3 id="name-title">Name:</h3>
                    <input id='name-input' type="text" onChange={this.props.handleNameChange} defaultValue={this.props.elementName} required/>
                </div>
                <div id='author-and-edit-block'>
                    <h3>Author: <i id='author-name'><u>{this.props.authorName}</u></i></h3>
                    <h3>Last Changes: <i id='edit-name'>{this.props.lastUserName}</i></h3>
                </div>
                <div id='back-to-list' onClick={this.backToList}></div>
            </div>
        )
    }
}

export default withRouter(ElementCommentsHeader);