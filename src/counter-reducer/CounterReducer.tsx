import { IncomingMessage } from "http";
import { useReducer } from "react";
import * as actions from "./actions/counter.actions";
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
      <button onClick={() => dispatch(actions.increase())}>+1</button>
      <button onClick={() => dispatch(actions.increaseBy(1))}>
        +1
      </button>
      <button onClick={() => dispatch(actions.increaseBy(5))}>
        +5
      </button>
      <button onClick={() => dispatch(actions.increaseBy(10))}>
        +10
      </button>
      <h1>
        <>Counter Reducer Segmentado: {state.counter}</>
      </h1>
      <button onClick={() => dispatch(actions.decrease())}>-1</button>
      <pre>{JSON.stringify(state, null, 3)}</pre>
    </div>
  );
};
