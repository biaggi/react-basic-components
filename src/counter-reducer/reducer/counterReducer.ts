import * as actions from "../actions/counter.actions";
import { CounterState } from "../interfaces/counter.interfaces";

export const counterReducer = (
  state: CounterState,
  action: actions.CounterAction
): CounterState => {
  const { type } = action;
  switch (type) {
    case actions.ActionEnum.increase:
      return {
        ...state,
        counter: state.counter - 1,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case actions.ActionEnum.decrease:
      return {
        ...state,
        counter: state.counter + 1,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case actions.ActionEnum.increaseBy:
      return {
        ...state,
        counter: state.counter + action.payload,
        previous: state.counter,
        changes: state.changes + 1,
      };
    default:
      return state;
  }
};
