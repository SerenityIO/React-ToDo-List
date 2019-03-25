import React from 'react';
import { withRouter } from "react-router-dom";
import ElementCommentsHeader from "./Component/ElementCommentsHeader";
import ElementCommentsAddComment from "./Component/ElementCommentsAddComment";
import ElementComentsComent from "./Component/ElementComentsComent";
import "./ElementComments.css";

let nameDebounce = null;
class ElementComments extends React.Component {
    constructor(props) {
        super(props);

        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('ListArray'));
        const index = arrayFromlocalStorage.findIndex((value) => {
            return value.id === +this.props.match.params.ElementId;
        });
        if (this.props.match.params.ElementId >= 0) {
            this.state = {
                Element: {
                    id: arrayFromlocalStorage[index].id,
                    name: arrayFromlocalStorage[index].name,
                    done: arrayFromlocalStorage[index].done,
                    checked: arrayFromlocalStorage[index].checked,
                    author: arrayFromlocalStorage[index].author,
                    LastChanges: arrayFromlocalStorage[index].LastChanges,
                    coments: []
                },
                Coments: arrayFromlocalStorage[index].coments
            };
        }
        else {
            this.props.history.push('/list');
        }
    }

    backToList = () => {
        this.props.history.push('/list');
    };

    handleNameChange = (event) => {
        if (nameDebounce) {
            clearTimeout(nameDebounce);
        }

        const name = event.target.value
        nameDebounce = setTimeout(() => {
            this.setState({
                Element: {
                    ...this.state.Element,
                    name
                }
            });
        }, 300);
    };

    addComent = (event) => {
        event.preventDefault();
        const ComentsArray = this.state.Coments;

        if (ComentsArray.length === 0) {
            let i = 0;
            window.localStorage.setItem('Coment_ID', JSON.stringify(i));
        };

        let Coment_ID = JSON.parse(window.localStorage.getItem('Coment_ID'));
        var l = new Date();
        var time = l.toLocaleString()
        ComentsArray.push({
            id: Coment_ID,
            name: event.target[0].value,
            author: JSON.parse(window.localStorage.getItem('User')),
            time: time
        });
        Coment_ID++;
        window.localStorage.setItem('Coment_ID', JSON.stringify(Coment_ID));
        event.target.reset();
        this.setState({
            Coments: ComentsArray
        });
    };

    removeComent = (id) => {
        const ComentsArray = this.state.Coments;
        const item = ComentsArray.find((value) => {
            return value.id === +id;
        })
        this.setState({
            Coments: ComentsArray.filter((value) => {
                return item.id !== +value.id;
            })
        });
    };

    componentDidUpdate() {
        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('ListArray'));
        const index = arrayFromlocalStorage.findIndex((value) => {
            return value.id === +this.props.match.params.ElementId;
        });
        arrayFromlocalStorage[index] = {
            ...this.state.Element
        };
        arrayFromlocalStorage[index].coments = this.state.Coments;
        window.localStorage.setItem('ListArray', JSON.stringify(arrayFromlocalStorage));
    };

    render() {
        return (
            <div id='main-coment'>
                <div id='elements'>
                    <ElementCommentsHeader
                        elementName={this.state.Element.name}
                        authorName={this.state.Element.author}
                        lastUserName={this.state.Element.LastChanges}
                        handleNameChange={this.handleNameChange}
                    />
                    <div id='coment-block'>
                        <ElementComentsComent
                            coments={this.state.Coments}
                            removeComent={this.removeComent}
                        />
                        <ElementCommentsAddComment
                            addComent={this.addComent}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ElementComments);