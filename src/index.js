import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise';

import App from "./components/App";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleWare)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(
        reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
