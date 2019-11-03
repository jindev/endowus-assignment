import { fetchEntity } from 'App/services/saga';
import { all, fork, takeEvery } from 'redux-saga/effects';

import { getCustomerDetailReqEntity, getCustomersReqEntity, Types } from './actions';
import { fetchCustomerDetail, fetchCustomers } from './repository';

function* getCustomers({ payload }: any) {
  yield* fetchEntity(getCustomersReqEntity, fetchCustomers, payload);
}

function* getCustomerDetail({ payload }: any) {
  yield* fetchEntity(getCustomerDetailReqEntity, fetchCustomerDetail, payload);
}

const watchCustomerList = () =>
  function* watch() {
    yield takeEvery(Types.GET_CUSTOMERS, getCustomers);
  };

const watchCustomerDetail = () =>
  function* watch() {
    yield takeEvery(Types.GET_CUSTOMER_DETAIL, getCustomerDetail);
  };

export default function* customerSagas() {
  yield all([fork(watchCustomerList()), fork(watchCustomerDetail())]);
}
