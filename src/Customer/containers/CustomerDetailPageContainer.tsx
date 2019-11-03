import { Creators } from 'Customer/actions';
import * as selectors from 'Customer/selectors';
import CustomerDetailPageTemplate from 'Customer/templates/CustomerDetailPageTemplate';
import { ICustomer } from 'Customer/types';
import { Creators as GoalCreators } from 'Goal/actions';
import * as goalsSelectors from 'Goal/selectors';
import { IGoal } from 'Goal/types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

interface IProps extends RouteComponentProps<{ id: string }> {
  customer: ICustomer;
  goals: IGoal[];
  getCustomerDetail: ({ id }: { id: string }) => void;
  getGoals: ({ customerId }: { customerId: string }) => void;
}

const CustomerDetailPageContainer: React.FC<IProps> = ({
  customer,
  getCustomerDetail,
  getGoals,
  goals,
  match: { params },
}) => {
  useEffect(() => {
    getCustomerDetail({ id: params.id });
    getGoals({ customerId: params.id });
  }, [getCustomerDetail, getGoals, params]);
  return (
    <>
      <CustomerDetailPageTemplate customer={customer} goals={goals} />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  customer: selectors.makeCustomer(),
  goals: goalsSelectors.makeGoals(),
});

function mapDispathToProps(dispath: any) {
  return {
    ...bindActionCreators(
      {
        ...Creators,
        getGoals: GoalCreators.getGoals,
      },
      dispath,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(withRouter(CustomerDetailPageContainer));
