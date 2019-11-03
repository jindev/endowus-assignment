import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Creators } from '../actions';
import * as selectors from '../selectors';
import CustomerListPageTemplate from '../templates/CustomerListPageTemplate';

const CustomerContainer = ({ customers, getCustomers }: any) => {
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  const handleClickSeachBtn = ({ name, email, status }: any) => {
    getCustomers({ name, email, status });
  };

  return (
    <>
      <CustomerListPageTemplate
        customers={customers}
        onClickSearch={handleClickSeachBtn}
      />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  customers: selectors.makeCustomers(),
});

function mapDispathToProps(dispath: any) {
  return {
    ...bindActionCreators(
      {
        ...Creators,
      },
      dispath,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(CustomerContainer);
