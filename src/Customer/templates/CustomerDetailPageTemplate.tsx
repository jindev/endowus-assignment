import PageHeader from '@atlaskit/page-header';
import { Container, Grid } from '@material-ui/core';
import { ICustomer } from 'Customer/types';
import GoalListTemplate from 'Goal/templates/GoalListTemplate';
import { IGoal } from 'Goal/types';
import React from 'react';

import CustomerDetailTemplate from './CustomerDetailTemplate';

interface IProps {
  customer: ICustomer;
  goals: IGoal[];
}

const renderCustomerDetail = (customer: ICustomer) => {
  return (
    <>
      <PageHeader>Customer</PageHeader>
      <CustomerDetailTemplate customer={customer} />
    </>
  );
};

const renderGoals = (goals: IGoal[]) => {
  return (
    <>
      <PageHeader>Goals</PageHeader>
      <GoalListTemplate goals={goals} />
    </>
  );
};

const CustomerDetailPageTemplate: React.FC<IProps> = ({ customer, goals }) => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {renderCustomerDetail(customer)}
          </Grid>

          {goals && goals.length > 0 ? (
            <Grid item xs={12}>
              {renderGoals(goals)}
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </>
  );
};

export default CustomerDetailPageTemplate;
