import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faComments, faPaintBrush, faCubes, faBullhorn, faChartLine, faStream, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(
  faComments, faPaintBrush, faCubes, faBullhorn, faChartLine, faStream, faTimes
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
