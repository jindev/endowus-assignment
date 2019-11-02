import { CCY } from 'App/types';

export type Plan = {
  customerId: string;
  goalId: string;
  planId: string;
  createdAt: string;
  planCcy: CCY;
  initialInvestmentAmount: number;
  recurringInvestmentSchedule?: {
    interval: InvestmentInterval;
    startingFrom: string;
    amount: number;
  };
  modelPortfolioName: string;
};

export enum InvestmentInterval {
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  QUARTERLY = 'QUARTERLY',
  SEMIANNUALLY = 'SEMIANNUALLY',
  ANNUALLY = 'ANNUALLY',
}
