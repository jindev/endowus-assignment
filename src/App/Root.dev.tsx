import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = ({ store, routes }: any) => (
  <Provider store={store}>
    <div>
      <Router>{routes}</Router>
      {/* <DevTools /> */}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  routes: PropTypes.shape({}).isRequired,
};

export default Root;
