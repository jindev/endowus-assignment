import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  try {
    yield all([fork()]);
  } catch (err) {
    console.error(err);
  }
}
