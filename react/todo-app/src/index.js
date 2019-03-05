import React from 'react';
import {render} from 'react-dom';
import './css/mainSite.css';
import mainSite from './App/mainSite';
import headSite from './App/headSite';
import listSite from './App/listSite';

headSite();
listSite();

render(<mainSite />, document.getElementById('root'));