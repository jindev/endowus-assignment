import { getApi } from 'App/services/api';

import { IGoal } from './types';

export interface IFetchGoalsPrams {
  customerId: string;
}

export const fetchGoals = (params: IFetchGoalsPrams) =>
  getApi<IGoal[]>(`/data/goal_${params.customerId}.json`);
