import React from 'react';
import { withRouter } from "react-router-dom";
import ElementCommentsHeader from "./Component/ElementCommentsHeader";
import ElementCommentsAddComment from "./Component/ElementCommentsAddComment";
import ElementCommentsComment from "./Component/ElementCommentsComment";
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
                    comments: []
                },
                Comments: arrayFromlocalStorage[index].comments
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

    addComment = (event) => {
        event.preventDefault();
        const CommentsArray = this.state.Comments;

        if (CommentsArray.length === 0) {
            let i = 0;
            window.localStorage.setItem('Comment_ID', JSON.stringify(i));
        };

        let Comment_ID = JSON.parse(window.localStorage.getItem('Comment_ID'));
        var l = new Date();
        var time = l.toLocaleString()
        CommentsArray.push({
            id: Comment_ID,
            name: event.target[0].value,
            author: JSON.parse(window.localStorage.getItem('User')),
            time: time
        });
        Comment_ID++;
        window.localStorage.setItem('Comment_ID', JSON.stringify(Comment_ID));
        event.target.reset();
        this.setState({
            Comments: CommentsArray
        });
    };

    removeComment = (id) => {
        const CommentsArray = this.state.Comments;
        const item = CommentsArray.find((value) => {
            return value.id === +id;
        })
        this.setState({
            Comments: CommentsArray.filter((value) => {
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
        arrayFromlocalStorage[index].comments = this.state.Comments;
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
                        <ElementCommentsComment
                            comments={this.state.Comments}
                            removeComment={this.removeComment}
                        />
                        <ElementCommentsAddComment
                            addComment={this.addComment}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ElementComments);