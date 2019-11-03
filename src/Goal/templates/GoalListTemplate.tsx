import { IGoal } from 'Goal/types';
import React from 'react';

import GoalDetailTemplate from './GoalDetailTemplate';

interface IProps {
  goals: IGoal[];
}

const GoalListTemplate: React.FC<IProps> = ({ goals }) => {
  return (
    <>
      {goals.map((g) => (
        <GoalDetailTemplate goal={g} key={g.goalId} />
      ))}
    </>
  );
};

export default GoalListTemplate;
