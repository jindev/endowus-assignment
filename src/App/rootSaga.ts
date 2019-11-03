import customerSagas from 'Customer/sagas';
import goalSagas from 'Goal/saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(customerSagas), fork(goalSagas)]);
}
