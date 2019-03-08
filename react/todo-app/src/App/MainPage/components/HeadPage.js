import React from 'react';
import '../css/HeadPage.css';

const HeadSite = (props) => (
    <header>
        <h3>{props.title}</h3>
        <form onSubmit={props.handleSubmit}>
            <input placeholder="Tide" required required type="text" />
            <button type='submit'>Add</button>
        </form>
        <menu>
            {/* <input type="checkbox" name="all" id="all" onclick={checkAll} />
            <button type="submit" onclick={removeCheck} id="deleteAll">Remove</button> */}
        </menu>
    </header>
);

export default HeadSite;