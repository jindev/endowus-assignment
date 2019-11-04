import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { IGoal } from 'Goal/types';
import PlanListTemplate from 'Plan/templates/PlanListTemplate';
import React from 'react';

interface IProps {
  goals: IGoal[];
}

const GoalListTemplate: React.FC<IProps> = ({ goals }) => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Stock Ratio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goals.map((g) => {
            return (
              <React.Fragment key={g.goalId}>
                <TableRow>
                  <TableCell>{g.name}</TableCell>
                  <TableCell>{g.status}</TableCell>
                  <TableCell>{g.targetStockRatio}</TableCell>
                </TableRow>
                {g.plans && g.plans.length > 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={3}
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
