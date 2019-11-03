import { CCY } from 'App/types';

export interface IRecurringInvestmentSchedule {
  interval: InvestmentInterval;
  startingFrom: string;
  amount: number;
}

export interface IPlan {
  customerId: string;
  goalId: string;
  planId: string;
  createdAt: string;
  planCcy: CCY;
  initialInvestmentAmount: number;
  recurringInvestmentSchedule?: IRecurringInvestmentSchedule;
  modelPortfolioName: string;
  [key: string]: any;
}

export enum InvestmentInterval {
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  SEMIANNUALLY = 'SEMIANNUALLY',
  ANNUALLY = 'ANNUALLY',
}
