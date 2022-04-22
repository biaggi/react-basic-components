import { IncomingMessage } from "http";
import { useReducer } from "react";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

export interface CounterReducerProps {
  initialValue: number;
}

type CounterAction =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "increaseBy"; payload: number };

const counterReducer = (
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

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increase" })}>+1</button>
      <button onClick={() => dispatch({ type: "increaseBy", payload: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "increaseBy", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "increaseBy", payload: 10 })}>
        +10
      </button>
      <h1>
        <>Counter Reducer: {state.counter}</>
      </h1>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button>
    </div>
  );
};
