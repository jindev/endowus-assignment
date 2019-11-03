import { createRequestTypes, IEntity } from 'App/services/action';
import { createActions } from 'reduxsauce';

const getGoalsReqTypes = createRequestTypes('getGoals');

export const { Types, Creators } = createActions({
  ...getGoalsReqTypes,
  getGoals: ['payload'],
});

export const getGoalsReqEntity: IEntity = {
  request: () => Creators.getGoalsRequest(),
  success: (response) => Creators.getGoalsSuccess(response),
  failure: (error) => Creators.getGoalsFailure(error),
};
