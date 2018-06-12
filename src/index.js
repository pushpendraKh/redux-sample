import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import client from './client';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
