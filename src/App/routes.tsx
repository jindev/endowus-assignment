import CustomerDetailPageContainer from 'Customer/containers/CustomerDetailPageContainer';
import CustomerListPageContainer from 'Customer/containers/CustomerListPageContainer';
import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';

export default (
  <Route>
    <Route path="/" component={App} exact />
    <Route path="/customers" component={CustomerListPageContainer} exact />
    <Route
      path="/customers/:id"
      component={CustomerDetailPageContainer}
      exact
    />
  </Route>
);
