import { SET_GOALS } from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case SET_GOALS:
      const {goals} = action;
      return goals;

    default:
      return state;
  }
}