import PageHeader from '@atlaskit/page-header';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Label, Stack, Text } from 'office-ui-fabric-react';
import { useStyles } from 'Plan/styles';
import { IPlan } from 'Plan/types';
import React from 'react';

interface IProps {
  plans: IPlan[];
}

const PlanListTemplate: React.FC<IProps> = ({ plans }) => {
  const classes = useStyles();
  return (
    <>
      <PageHeader>Plans</PageHeader>
      <Table>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell align="center">Ccy</TableCell>
            <TableCell align="center">Initial Investment Amount</TableCell>
            <TableCell align="center">Model Portfolio Name</TableCell>
            <TableCell align="center">Recurring Investment Schedule</TableCell>
            <TableCell align="center">CreatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plans.map((row) => (
            <TableRow key={row.planId}>
              <TableCell align="center">{row.planCcy}</TableCell>
              <TableCell align="center">
                {row.initialInvestmentAmount}
              </TableCell>
              <TableCell align="center">{row.modelPortfolioName}</TableCell>
              <TableCell align="center">
                {row.recurringInvestmentSchedule ? (
                  <>
                    <Stack horizontal tokens={{ childrenGap: 25, padding: 10 }}>
                      <Label className={classes.stackLabel}>Amount</Label>
                      <Text block variant="large">
                        {row.recurringInvestmentSchedule.amount}
                      </Text>
                    </Stack>
                    <Stack horizontal tokens={{ childrenGap: 25, padding: 10 }}>
                      <Label className={classes.stackLabel}>startingFrom</Label>
                      <Text block variant="large">
                        {row.recurringInvestmentSchedule.startingFrom}
                      </Text>
                    </Stack>
                    <Stack horizontal tokens={{ childrenGap: 25, padding: 10 }}>
                      <Label className={classes.stackLabel}>interval</Label>
                      <Text block variant="large">
                        {row.recurringInvestmentSchedule.interval}
                      </Text>
                    </Stack>
                  </>
                ) : (
                  'none'
                )}
              </TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PlanListTemplate;
