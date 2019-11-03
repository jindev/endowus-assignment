import { createSelector } from 'reselect';

const selectGoals = (state: any) => {
  return state.goal.get('goals');
};

export const makeGoals = () =>
  createSelector(
    selectGoals,
    (goals) => {
      return goals.toJS();
    },
  );
