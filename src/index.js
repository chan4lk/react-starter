import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './components/ToDo';
import configureStore from './configure-store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <ToDo />
    </Provider>,
    document.getElementById('root'));
