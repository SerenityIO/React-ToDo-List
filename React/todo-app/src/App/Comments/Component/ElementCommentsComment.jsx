import React from 'react';
import { withRouter } from "react-router-dom";

class ElementCommentsComment extends React.Component {
    render() {
        return (
            <ul id='coment-list'>
                {this.props.coments.map((coment) => (
                    <li id={coment.id} key={coment.id + 'item'}>
                        <pre>
                            {coment.name}
                        </pre>
                        <div className='info-and-remome'>
                            <div className='coment-info'>
                                <div className='c-info'>
                                    <p>
                                        <b>Create: </b>
                                        <i className='g'>{coment.author}</i>
                                    </p>
                                    <p><b>Time: </b><u className='date'>{coment.time}</u></p>
                                </div>
                            </div>
                            <div className="remove-coment" onClick={() => this.props.removeComent(coment.id)}></div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default withRouter(ElementCommentsComment);