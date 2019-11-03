import { createRequestTypes, IEntity } from 'App/services/action';
import { createActions } from 'reduxsauce';

const getCustomersReqTypes = createRequestTypes('getCustomers');
const getCustomerDetailReqTypes = createRequestTypes('getCustomerDetail');

export const { Types, Creators } = createActions({
  ...getCustomersReqTypes,
  ...getCustomerDetailReqTypes,
  getCustomers: ['payload'],
  getCustomerDetail: ['payload'],
});

export const getCustomersReqEntity: IEntity = {
  request: () => Creators.getCustomersRequest(),
  success: (response) => Creators.getCustomersSuccess(response),
  failure: (error) => Creators.getCustomersFailure(error),
};

export const getCustomerDetailReqEntity: IEntity = {
  request: () => Creators.getCustomerDetailRequest(),
  success: (response) => Creators.getCustomerDetailSuccess(response),
  failure: (error) => Creators.getCustomerDetailFailure(error),
};
