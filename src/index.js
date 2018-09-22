import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import { Provider } from 'react-redux';
ReactDOM.render(

	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));


