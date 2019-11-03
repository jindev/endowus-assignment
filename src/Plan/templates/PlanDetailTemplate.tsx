import { Typography } from '@material-ui/core';
import { useStyles } from 'Customer/styles';
import { IPlan } from 'Plan/types';
import React from 'react';

interface IProps {
  plan: IPlan;
}

const PlanDetailTemplate: React.FC<IProps> = ({ plan }) => {
  const classes = useStyles();
  return (
    <>
      {Object.keys(plan).map((k: string) => {
        if (typeof plan[k] === 'object') {
          return null;
        }
        return (
          <Typography component="p" key={k}>
            <span className={classes.span}>{k}: </span> {plan[k]}
          </Typography>
        );
      })}
    </>
  );
};

export default PlanDetailTemplate;
