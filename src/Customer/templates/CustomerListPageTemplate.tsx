import PageHeader from '@atlaskit/page-header';
import { Container, Grid } from '@material-ui/core';
import React from 'react';

import CustomerListSearchBar from './CustomerListSearchBar';
import CustomerListTemplate, { ICustomerForList } from './CustomerListTemplate';

interface IProps {
  customers: ICustomerForList;
  onClickSearch: ({ name, email, status }: any) => void;
}

const CustomerListPageTemplate: React.FC<IProps> = ({
  customers,
  onClickSearch,
}) => {
  return (
    <>
      <Container>
        <PageHeader>Customers</PageHeader>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomerListSearchBar onClickSearch={onClickSearch} />
          </Grid>

          <Grid item xs={12}>
            <CustomerListTemplate customers={customers} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CustomerListPageTemplate;
