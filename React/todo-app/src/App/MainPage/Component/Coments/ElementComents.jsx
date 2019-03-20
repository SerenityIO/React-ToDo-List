import React from 'react';
import { withRouter } from "react-router-dom";
import ElementComentsHeader from "./Components/ElementComentsHeader"
import "./ElementComents.css";

class ElementComents extends React.Component {
    constructor(props) {
        super(props);

        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('ListArray'));
        const index = arrayFromlocalStorage.findIndex((value) => {
            return value.id == this.props.match.params.ElementId;
        });
        if (this.props.match.params.ElementId >= 0) {
            this.state = {
                Element: [{
                    id: arrayFromlocalStorage[index].id,
                    name: arrayFromlocalStorage[index].name,
                    done: arrayFromlocalStorage[index].done,
                    checked: arrayFromlocalStorage[index].checked,
                    author: arrayFromlocalStorage[index].author,
                    LastChanges: arrayFromlocalStorage[index].LastChanges,
                    coments: arrayFromlocalStorage[index].coments
                }]
            };
        }
        else {
            this.props.history.push('/list');
        }
    }

    BackToList = () => {
        this.props.history.push('/list');
    };

    render() {

        return (
            <div>
                {this.state.Element.map((val) => (
                    <div id='elements' key={val.id + 'item'}>
                        <ElementComentsHeader
                            ElementName={val.name}
                            AuthorName={val.author}
                            LastUserName={val.LastChanges}
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default withRouter(ElementComents);