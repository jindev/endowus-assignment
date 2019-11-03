import {
  getCustomersSuccess,
  getCustomerDetailSuccess,
  default as reducer,
} from './reducers';
import { fromJS } from 'immutable';
import { Creators } from './actions';

describe('cutomer reducer', () => {
  describe('getCustomerSuccess', () => {
    it('should get state with customers from payload', () => {
      const state = fromJS({
        customers: [],
      });
      const expectedPayload = [{ id: 1234 }];
      const result = getCustomersSuccess(state, { payload: expectedPayload });
      expect(result.toJS()).toStrictEqual({ customers: expectedPayload });
    });
  });
  describe('getCustomerDetailSuccess', () => {
    it('should get state with customers from payload', () => {
      const state = fromJS({
        customer: null,
      });
      const expectedPayload = { id: 1234 };
      const result = getCustomerDetailSuccess(state, {
        payload: expectedPayload,
      });
      expect(result.toJS()).toStrictEqual({ customer: expectedPayload });
    });
  });

  describe('reducer', () => {
    it('should get customers when success getCustomers. ', () => {
      const state = fromJS({
        customers: [],
      });
      const expected = [{ id: 11234 }];
      const result = reducer(state, Creators.getCustomersSuccess(expected));

      expect(result.toJS()).toStrictEqual({ customers: expected });
    });

    it('should not change customers in state when fail getCustomers. ', () => {
      const state = fromJS({
        customers: [],
      });
      const result = reducer(state, Creators.getCustomersFailure());
      expect(result.toJS()).toStrictEqual(state.toJS());
    });

    it('should get customer when success getCustomerDetail. ', () => {
      const state = fromJS({
        customer: null,
      });
      const expected = [{ id: 11234 }];
      const result = reducer(
        state,
        Creators.getCustomerDetailSuccess(expected),
      );

      expect(result.toJS()).toStrictEqual({ customer: expected });
    });

    it('should not change customer in state when fail getCustomerDetail. ', () => {
      const state = fromJS({
        customer: [],
      });
      const result = reducer(state, Creators.getCustomerDetailFailure());
      expect(result.toJS()).toStrictEqual(state.toJS());
    });
  });
});
