import CustomerDetailPageContainer from 'Customer/containers/CustomerDetailPageContainer';
import CustomerListPageContainer from 'Customer/containers/CustomerListPageContainer';
import React from 'react';
import { Route } from 'react-router-dom';

export default (
  <Route>
    <Route path="/" component={CustomerListPageContainer} exact />
    <Route
      path="/customers/:id"
      component={CustomerDetailPageContainer}
      exact
    />
  </Route>
);
