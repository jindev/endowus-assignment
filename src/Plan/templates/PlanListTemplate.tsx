import { IPlan } from 'Plan/types';
import React from 'react';

import PlanDetailTemplate from './PlanDetailTemplate';

interface IProps {
  plans: IPlan[];
}

const PlanListTemplate: React.FC<IProps> = ({ plans }) => {
  return (
    <>
      {plans.map((p) => (
        <PlanDetailTemplate plan={p} key={p.planId} />
      ))}
    </>
  );
};

export default PlanListTemplate;
