import rootReducer from 'App/rootReducer';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import { ICStore } from './types';

export default function configureStore(initialState: any) {
  const sagaMiddleware = createSagaMiddleware();
  const store: ICStore = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
