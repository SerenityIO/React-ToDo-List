import React from 'react';
// import '../css/mainSite.css';
import HeadSite from './HeadSite';
import ListSite from './ListSite';

class MainSite extends React.Component {
    render() {
        return (
            <main>
                <HeadSite />
                <ListSite />
            </main>
        );
    };
};

export default MainSite;