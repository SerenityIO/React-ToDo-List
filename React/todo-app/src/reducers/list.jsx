const initialStore = (JSON.parse(window.localStorage.getItem('ListArray'))) ? JSON.parse(window.localStorage.getItem('ListArray')) : [];

export default function list(state = initialStore, action) {
    if (action.type === 'ADD_ELEMENT') {
        if (state.length === 0) {
            let i = 0;
            window.localStorage.setItem('ID', JSON.stringify(i));
        };
        let ID = JSON.parse(window.localStorage.getItem('ID'));
        const elem = {
            id: ID,
            name: action.name,
            done: false,
            checked: false,
            author: JSON.parse(window.localStorage.getItem('User')),
            LastChanges: 'Is not edit!',
            comments: []
        };
        ID++;
        window.localStorage.setItem('ID', JSON.stringify(ID));
        return [
            ...state,
            elem
        ]
    } else if (action.type === 'CHECK_ALL_ELEMENTS') {
        var all = document.getElementById('all');

        if (all.checked) {
            for (let i = 0; i < state.length; i++) {
                state[i].checked = true;
            }
        } else {
            for (let i = 0; i < state.length; i++) {
                state[i].checked = false;
            }
        }
        return [...state];
    } else if (action.type === 'REMOVE_CHECK_ELEMENTS') {
        return [...state.filter((value) => {
            return !value.checked;
        })]
    } else if (action.type === 'DELETE_ELEMENT') {
        return state.filter((value) => {
            return state.find((value) => {
                return value.id === action.id;
            }).id !== value.id;
        });
    } else if (action.type === 'CHECK_ELEMENT') {
        const index = state.findIndex((value) => {
            return value.id === action.id;
        });
        state[index].checked = !state[index].checked;
        return [...state];
    } else if (action.type === 'DONE_ELEMENT') {
        const index = state.findIndex((value) => {
            return value.id === action.id;
        });
        state[index].done = !state[index].done;
        return [...state];
    } else if (action.type === 'EDIT_ELEMENT') {
        const newName = prompt('Write new name this row');
        const index = state.findIndex((value) => {
            return value.id === action.id;
        });
        if (newName !== 0) {
            state[index].name = newName;
            state[index].LastChanges = JSON.parse(window.localStorage.getItem('User'));
        }
        return [...state];
    } else if (action.type === 'COPY_ELEMENT') {
        let ID = JSON.parse(window.localStorage.getItem('ID'));
        const index = state.findIndex((value) => {
            return value.id === action.id;
        });

        ID++;
        window.localStorage.setItem('ID', JSON.stringify(ID));
        return [
            ...state, {
                id: ID,
                name: state[index].name,
                done: state[index].done,
                checked: state[index].checked,
                author: state[index].author,
                LastChanges: 'Is not edit!',
                comments: state[index].comments
            }];
    }
    return state;
}

