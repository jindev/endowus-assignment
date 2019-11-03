import { Typography, Grid } from '@material-ui/core';
import { useStyles } from 'Customer/styles';
import { ICustomer, IPersonalDetails } from 'Customer/types';
import React from 'react';

interface ICustomerDetailTemplateProps {
  customer: ICustomer;
}

const PersonalDetailsTemplate: React.FC<{
  personalDetails: IPersonalDetails;
}> = ({ personalDetails }) => {
  const classes = useStyles();
  return (
    <>
      {Object.keys(personalDetails).map((k: string) => {
        return (
          <Typography component="p" key={k}>
            <span className={classes.span}>{k}: </span> {personalDetails[k]}
          </Typography>
        );
      })}
    </>
  );
};

const renderCustomerInfo = (customer: ICustomer, className: string) => {
  return (
    <>
      {Object.keys(customer).map((k: string) => {
        if (typeof customer[k] === 'object') {
          return null;
        }

        return (
          <Typography component="p" key={k}>
            <span className={className}>{k}: </span> {customer[k]}
          </Typography>
        );
      })}
    </>
  );
};

const CustomerDetailTemplate: React.FC<ICustomerDetailTemplateProps> = ({
  customer,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          {renderCustomerInfo(customer, classes.span)}
        </Grid>
        <Grid item xs={6}>
          {customer.personalDetails ? (
            <PersonalDetailsTemplate
              personalDetails={customer.personalDetails}
            />
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default CustomerDetailTemplate;
