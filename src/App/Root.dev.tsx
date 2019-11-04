import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import DevTools from './DevTools';

interface IProps {
  store: any;
  routes: any;
}

const Root: React.FC<IProps> = ({ store, routes }) => (
  <Provider store={store}>
    <div>
      <Router>{routes}</Router>
      <DevTools />
    </div>
  </Provider>
);

export default Root;
