import { Grid } from '@material-ui/core';
import { useStyles } from 'Customer/styles';
import { ICustomer, IPersonalDetails } from 'Customer/types';
import { Stack } from 'office-ui-fabric-react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Text } from 'office-ui-fabric-react/lib/Text';
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
      {Object.keys(personalDetails).map((k: string, i: number) => {
        return (
          <Stack horizontal tokens={{ childrenGap: 25, padding: 10 }} key={i}>
            <Label className={classes.stackLabel}>{k}</Label>
            <Text block variant="large">
              {personalDetails[k]}
            </Text>
          </Stack>
        );
      })}
    </>
  );
};

const renderCustomerInfo = (customer: ICustomer, classes: any) => {
  return (
    <>
      {Object.keys(customer).map((k: string, i: number) => {
        if (typeof customer[k] === 'object') {
          return null;
        }
        return (
          <Stack horizontal tokens={{ childrenGap: 25, padding: 10 }} key={i}>
            <Label className={classes.stackLabel}>{k} </Label>
            <Text block variant="large">
              {customer[k]}
            </Text>
          </Stack>
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
      <Grid container className={classes.detailGridContianer}>
        <Grid item xs={6}>
          {renderCustomerInfo(customer, classes)}
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
