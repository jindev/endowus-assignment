import { createSelector } from 'reselect';

const selectCustomers = (state: any) => {
  return state.customer.get('customers');
};

const selectCustomer = (state: any) => {
  return state.customer.get('customer');
};

export const makeCustomers = () =>
  createSelector(
    selectCustomers,
    (customers) => {
      return customers.toJS();
    },
  );

export const makeCustomer = () =>
  createSelector(
    selectCustomer,
    (customer) => customer.toJS(),
  );
