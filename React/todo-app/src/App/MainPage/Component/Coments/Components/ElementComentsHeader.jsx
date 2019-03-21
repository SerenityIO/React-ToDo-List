import React from 'react';
import { withRouter } from "react-router-dom";

class ElementComentsHeader extends React.Component {
    BackToList = () => {
        this.props.history.push('/list');
    };

    render() {

        return (
            <div id='header'>
                <div id='NameBlock'>
                    <h3 id="NameTitle">Name:</h3>
                    <input id='NameInput' type="text" defaultValue={this.props.ElementName} />
                </div>
                <div id='AuthorAndEditBlock'>
                    <h3>Author: <i id='AuthorName'><u>{this.props.AuthorName}</u></i></h3>
                    <h3>Last Changes: <i id='EditName'>{this.props.LastUserName}</i></h3>
                </div>
                <div id='BackToList' onClick={this.BackToList}></div>
            </div>
        )
    }
}
export default withRouter(ElementComentsHeader);