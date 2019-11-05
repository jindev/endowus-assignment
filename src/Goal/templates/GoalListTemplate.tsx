import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from 'Goal/styles';
import { IGoal } from 'Goal/types';
import PlanListTemplate from 'Plan/templates/PlanListTemplate';
import React from 'react';

interface IProps {
  goals: IGoal[];
}

const GoalListTemplate: React.FC<IProps> = ({ goals }) => {
  const classes = useStyles();
  return (
    <>
      <Table>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Stock Ratio</TableCell>
            <TableCell align="center">Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goals.map((g) => {
            return (
              <React.Fragment key={g.goalId}>
                <TableRow>
                  <TableCell align="center">{g.name}</TableCell>
                  <TableCell align="center">{g.status}</TableCell>
                  <TableCell align="center">{g.targetStockRatio}</TableCell>
                  <TableCell align="center">{g.createdAt}</TableCell>
                </TableRow>
                {g.plans && g.plans.length > 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={12}
                      children={<PlanListTemplate plans={g.plans} />}
                    />
                  </TableRow>
                ) : null}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default GoalListTemplate;
