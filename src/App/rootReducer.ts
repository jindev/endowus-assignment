import customer from 'Customer/reducers';
import goal from 'Goal/reducers';
import { combineReducers } from 'redux';

function errorMessage(state = {}, action: any) {
  if (action.failure) return action.failure;
  return state;
}

const rootReducer = combineReducers({
  customer,
  goal,
  errorMessage,
});

export default rootReducer;
