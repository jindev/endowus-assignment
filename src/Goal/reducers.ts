import { fromJS } from 'immutable';
import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const INITIAL_STATE = fromJS({
  goals: [],
});

export const getGoalsSuccess = (state: any, { payload }: any) =>
  state.merge({ goals: fromJS(payload) });

const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_GOALS_SUCCESS]: getGoalsSuccess,
});

export default reducer;
