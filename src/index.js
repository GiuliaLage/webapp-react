import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import promise from 'redux-promise'
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './index.css';
import Table from './components/Table/Table';
import reducers from './main/reducers'

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__
&&  window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise)(createStore)(reducers, DevTools)

ReactDOM.render(
    <div>
    <Provider store={store}>
        <Table columns={['ID','NOME','SOBRENOME', 'EMAIL', 'AÇAO']}
        />
    </Provider>
    </div>
    

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
