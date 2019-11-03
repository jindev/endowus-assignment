import { Typography } from '@material-ui/core';
import { useStyles } from 'Customer/styles';
import { IGoal } from 'Goal/types';
import React from 'react';

interface IProps {
  goal: IGoal;
}

const GoalDetailTemplate: React.FC<IProps> = ({ goal }) => {
  const classes = useStyles();
  return (
    <>
      {Object.keys(goal).map((k: string) => {
        if (typeof goal[k] === 'object') {
          return null;
        }
        return (
          <Typography component="p" key={k}>
            <span className={classes.span}>{k}: </span> {goal[k]}
          </Typography>
        );
      })}
    </>
  );
};

export default GoalDetailTemplate;
