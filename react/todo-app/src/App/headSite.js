import React from 'react'
import '../css/headSite.css'

function headSite() {
    return (
        <header>
            <h3>My ToDo-List</h3>
            <form>
                <input placeholder = "Tide" required  required type = "text"/>
                <button type = 'submit'>Add</button>
            </form>
            <menu>
                <input type="checkbox" name="all" id="all" onclick="checkAll(event);"/>
                <button type="submit" onclick="removeCheck(event);" id="deleteAll">Remove</button>
                <button type='submit' onclick="WindowReplace();" id ='load'>Load</button>
            </menu>
        </header>
    )
}

headSite();
export default headSite