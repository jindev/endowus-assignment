import { getGoalsSuccess, default as reducer } from './reducers';
import { fromJS } from 'immutable';
import { Creators } from './actions';

describe('goals reducer', () => {
  describe('getGoalsSuccess', () => {
    it('should get state with goals from payload', () => {
      const state = fromJS({
        goals: [],
      });
      const expectedPayload = [{ id: 1234 }];
      const result = getGoalsSuccess(state, { payload: expectedPayload });
      expect(result.toJS()).toStrictEqual({ goals: expectedPayload });
    });
  });

  describe('reducer', () => {
    it('should get goals when getGoals success. ', () => {
      const state = fromJS({
        goals: [],
      });
      const expected = [{ id: 11234 }];
      const result = reducer(state, Creators.getGoalsSuccess(expected));

      expect(result.toJS()).toStrictEqual({ goals: expected });
    });

    it('should not change goals in state when get goals failure ', () => {
      const state = fromJS({
        goals: [],
      });
      const result = reducer(state, Creators.getGoalsFailure());
      expect(result.toJS()).toStrictEqual(state.toJS());
    });
  });
});
