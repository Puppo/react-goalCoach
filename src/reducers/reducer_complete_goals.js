import { SET_COMPLETE_GOALS } from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case SET_COMPLETE_GOALS:
      const {completedGoals} = action;
      return completedGoals;

    default:
      return state;
  }
}