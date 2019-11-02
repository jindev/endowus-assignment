import DevTools from 'App/DevTools';
import rootReducer from 'App/rootReducer';
import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';

import { CStore } from './types';

export default function configureStore(initialState: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store: CStore = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware, createLogger),
      DevTools.instrument(),
    ),
  );

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextRootReducer = require('App/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
