import React from 'react';
import '../css/HeadSite.css';

const HeadSite = () => (
    <header>
        <h3>My ToDo-List</h3>
        <form>
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