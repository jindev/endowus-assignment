import './index.css';

import getRoot from 'App/Root';
import rootSaga from 'App/rootSaga';
import routes from 'App/routes';
import { getConfigureStore } from 'App/store/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

const store = getConfigureStore()({});
store.runSaga(rootSaga);

const Root = getRoot();

ReactDOM.render(
  <Root store={store} routes={routes} />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
