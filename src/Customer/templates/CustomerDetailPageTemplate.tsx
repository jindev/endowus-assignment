import {
  Container,
  Grid,
  CardContent,
  Card,
  CardHeader,
} from '@material-ui/core';
import { ICustomer } from 'Customer/types';
import GoalListTemplate from 'Goal/templates/GoalListTemplate';
import { IGoal } from 'Goal/types';
import PlanListTemplate from 'Plan/templates/PlanListTemplate';
import React from 'react';

import CustomerDetailTemplate from './CustomerDetailTemplate';

interface IProps {
  customer: ICustomer;
  goals: IGoal[];
}

const renderCustomerDetail = (customer: ICustomer) => {
  return (
    <Card>
      <CardHeader title={'Customer Detail'}></CardHeader>
      <CardContent>
        <CustomerDetailTemplate customer={customer} />
      </CardContent>
    </Card>
  );
};

const renderGoals = (goals: IGoal[]) => {
  return (
    <Card>
      <CardHeader title={'Goals'}></CardHeader>
      <CardContent>
        <GoalListTemplate goals={goals} />
      </CardContent>
    </Card>
  );
};

const renderPlans = (goals: IGoal[]) => {
  return (
    <Card>
      <CardHeader title={'Plans'}></CardHeader>
      <CardContent>
        {goals.map((g) => {
          return g.plans ? (
            <PlanListTemplate plans={g.plans} key={g.goalId} />
          ) : null;
        })}
      </CardContent>
    </Card>
  );
};

const CustomerDetailPageTemplate: React.FC<IProps> = ({ customer, goals }) => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {renderCustomerDetail(customer)}
          </Grid>
          <Grid item xs={6}>
            {renderGoals(goals)}
          </Grid>
          <Grid item xs={6}>
            {renderPlans(goals)}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CustomerDetailPageTemplate;
