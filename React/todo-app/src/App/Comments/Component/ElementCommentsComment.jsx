import React from 'react';
import { withRouter } from "react-router-dom";

class ElementCommentsComment extends React.Component {
    render() {
        return (
            <ul id='coment-list'>
                {this.props.comments.map((comment) => (
                    <li id={comment.id} key={comment.id + 'item'}>
                        <pre>
                            {comment.name}
                        </pre>
                        <div className='info-and-remome'>
                            <div className='coment-info'>
                                <div className='c-info'>
                                    <p>
                                        <b>Create: </b>
                                        <i className='g'>{comment.author}</i>
                                    </p>
                                    <p><b>Time: </b><u className='date'>{comment.time}</u></p>
                                </div>
                            </div>
                            <div className="remove-coment" onClick={() => this.props.removeComment(comment.id)}></div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default withRouter(ElementCommentsComment);