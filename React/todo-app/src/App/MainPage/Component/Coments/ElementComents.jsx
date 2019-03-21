import React from 'react';
import { withRouter } from "react-router-dom";
import ElementComentsHeader from "./Components/ElementComentsHeader"
import ElementComentsAddComent from "./Components/ElementComentsAddComent"
import "./ElementComents.css";

class ElementComents extends React.Component {
    constructor(props) {
        super(props);

        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('ListArray'));
        const index = arrayFromlocalStorage.findIndex((value) => {
            return value.id === +this.props.match.params.ElementId;
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
                    coments: []
                }],
                Coment: arrayFromlocalStorage[index].coments
            };
        }
        else {
            this.props.history.push('/list');
        }
    }

    BackToList = () => {
        this.props.history.push('/list');
    };



    AddComent = (e) => {
        e.preventDefault();
        const ComentArray = this.state.Coment;

        if (ComentArray.length === 0) {
            let i = 0;
            window.localStorage.setItem('Coment_ID', JSON.stringify(i));
        };

        let Coment_ID = JSON.parse(window.localStorage.getItem('Coment_ID'));
        var l = new Date();
        var time = l.toLocaleString()
        ComentArray.push({
            id: Coment_ID,
            name: e.target[0].value,
            author: JSON.parse(window.localStorage.getItem('User')),
            time: time
        });
        Coment_ID++;
        window.localStorage.setItem('Coment_ID', JSON.stringify(Coment_ID));
        e.target.reset();
        this.setState({
            Coment: ComentArray
        });
    };

    RemoveComent = (id) => {
        const ComentArray = this.state.Coment;
        const item = ComentArray.find((value) => {
            return value.id == id;
        })
        this.setState({
            Coment: ComentArray.filter((value) => {
                return item.id != value.id;
            })
        });
    };

    componentDidUpdate() {
        let arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('ListArray'));
        const index = arrayFromlocalStorage.findIndex((value) => {
            return value.id == this.props.match.params.ElementId;
        });
        arrayFromlocalStorage[index].coments = this.state.Coment;
        window.localStorage.setItem('ListArray', JSON.stringify(arrayFromlocalStorage));
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
                        <div id='ComentBlock'>
                            <ul id='ComentList'>
                                {this.state.Coment.map((coment) => (
                                    <li id={coment.id} key={coment.id + 'item'}>
                                        <pre>
                                            {coment.name}
                                        </pre>
                                        <div id='InfoAndRemome'>
                                            <div id='ComentInfo'>
                                                <div id='cInfo'>
                                                    <p><b>Create: </b><i id='g'>{coment.author}</i></p>
                                                    <p><b>Time: </b><u id='date'>{coment.time}</u></p>
                                                </div>
                                            </div>
                                            <div id="RemoveComent" onClick={() => this.RemoveComent(coment.id)}></div>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                            <ElementComentsAddComent
                                AddComent={this.AddComent}
                            />
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default withRouter(ElementComents);