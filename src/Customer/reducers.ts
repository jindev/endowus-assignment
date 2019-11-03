import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const INITIAL_STATE = fromJS({
  customers: [],
  customer: {},
});

export const getCustomersSuccess = (state: any, { payload }: any) => {
  return state.merge({ customers: fromJS(payload) });
};

export const getCustomerDetailSuccess = (state: any, { payload }: any) => {
  return state.merge({ customer: fromJS(payload) });
};

const reducer = createReducer<any, { payload: any; type: string }>(
  INITIAL_STATE,
  {
    [Types.GET_CUSTOMERS_SUCCESS]: getCustomersSuccess,
    [Types.GET_CUSTOMER_DETAIL_SUCCESS]: getCustomerDetailSuccess,
  },
);

export default reducer;
