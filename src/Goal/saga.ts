import { fetchEntity } from 'App/services/saga';
import { Types } from 'Goal/actions';
import { all, fork, takeEvery } from 'redux-saga/effects';

import { getGoalsReqEntity } from './actions';
import { fetchGoals } from './repository';

export function* getGoals({ payload }: any) {
  yield* fetchEntity(getGoalsReqEntity, fetchGoals, payload);
}

export const watchGoals = () => {
  return function* watch() {
    yield takeEvery(Types.GET_GOALS, getGoals);
  };
};

export default function* goalSagas() {
  yield all([fork(watchGoals())]);
}
