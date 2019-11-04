import PageHeader from '@atlaskit/page-header';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { IPlan } from 'Plan/types';
import React from 'react';

interface IProps {
  plans: IPlan[];
}

const PlanListTemplate: React.FC<IProps> = ({ plans }) => {
  return (
    <>
      <PageHeader>Plans</PageHeader>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">Ccy</TableCell>
            <TableCell align="right">Initial Investment Amount</TableCell>
            <TableCell align="right">Model Portfolio Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plans.map((row) => (
            <TableRow key={row.planId}>
              <TableCell align="right">{row.planCcy}</TableCell>
              <TableCell align="right">{row.initialInvestmentAmount}</TableCell>
              <TableCell align="right">{row.modelPortfolioName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default PlanListTemplate;
