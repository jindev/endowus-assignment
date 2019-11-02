import { combineReducers } from 'redux';

function errorMessage(state = {}, action: any) {
  if (action.failure) return action.failure;
  return state;
}

const rootReducer = combineReducers({
  errorMessage,
});

export default rootReducer;
