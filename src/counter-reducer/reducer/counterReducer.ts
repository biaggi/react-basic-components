import { CounterAction } from "../actions/counter.actions";
import { CounterState } from "../interfaces/counter.interfaces";

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { type } = action;
  switch (type) {
    case "decrease":
      return {
        ...state,
        counter: state.counter - 1,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + 1,
        previous: state.counter,
        changes: state.changes + 1,
      };
    case "increaseBy":
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
