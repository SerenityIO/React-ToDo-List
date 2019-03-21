import React from 'react';
import { withRouter } from "react-router-dom";

class ElementComentsAddComent extends React.Component {
    ValidForm = (e) => {
        if(e.keyCode === 13 && e.crtlKey){
            e.form.submit();
        }


    };
    
    render() {
        return (
            <div id='ComentAddPanel'>
                <form onSubmit={this.props.AddComent}>
                    <textarea id='ComentName' onKeyPress={this.ValidForm}></textarea>
                    <button id='ComentButton' type='submit'>Add Coment</button>
                </form>
            </div>
        )
    }
}
export default withRouter(ElementComentsAddComent);