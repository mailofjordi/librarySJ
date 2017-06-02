import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from 'redux-promise';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import App from "./components/App";
import reducers from './reducers';

let sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(promiseMiddleWare, sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
