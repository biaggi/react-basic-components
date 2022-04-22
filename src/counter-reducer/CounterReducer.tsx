import { IncomingMessage } from "http";
import { useReducer } from "react";
import { CounterAction } from "./actions/counter.actions";
import { CounterState } from "./interfaces/counter.interfaces";
import { counterReducer } from "./reducer/counterReducer";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};


export interface CounterReducerProps {
  initialValue: number;
}



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
        <>Counter Reducer Segmentado: {state.counter}</>
      </h1>
      <button onClick={() => dispatch({ type: "decrease" })}>-1</button>
    </div>
  );
};
