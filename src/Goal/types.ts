import { Plan } from '../Plan/types';

export type Goal = {
  goalId: string;
  customerId: string;
  createdAt: string;
  name: string;
  targetStockRatio: string;
  status: GoalStatus;
  plans?: Plan[];
};

enum GoalStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
