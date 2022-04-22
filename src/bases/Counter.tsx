import { IncomingMessage } from "http";
import { useState } from "react";
import { act } from "react-dom/test-utils";

export interface CounterProps {
  initialValue: number;
}
export const Counter = (props: CounterProps = {initialValue: 0}) => {
  const [count, setCount] = useState(props.initialValue);
  

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={inc}>+1</button>
      <h1>
        <>Counter: {count}</>
      </h1>
      <button onClick={dec}>-1</button>
    </div>
  );
};
