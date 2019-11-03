import { call, put } from 'redux-saga/effects';

import { IEntity } from './action';

export const fetchEntity = function*(entity: IEntity, apiFn: any, data: any) {
  try {
    yield put(entity.request());
    const result = yield call(apiFn, data);
    yield put(entity.success(result));
  } catch (err) {
    yield put(entity.failure(err));
  }
};
