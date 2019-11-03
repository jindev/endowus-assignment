import { IPlan } from 'Plan/types';

export interface IGoal {
  goalId: string;
  customerId: string;
  createdAt: string;
  name: string;
  targetStockRatio: string;
  status: GoalStatus;
  plans?: IPlan[];
  [k: string]: any;
}

export enum GoalStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
