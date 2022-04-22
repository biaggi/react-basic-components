import { IncomingMessage } from "http";
import { useState } from "react";
import { act } from "react-dom/test-utils";

interface CounterProps {
  initialValue: number;
}

interface CounterState {
  count: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: CounterProps) => {
  const [{ count, clicks }, setCount] = useState<CounterState>({
    count: initialValue,
    clicks: 0,
  });

  const inc = (v: number) => {
    setCount(({ clicks, count }) => ({ count: count + v, clicks: clicks + 1 }));
  };

  return (
    <div>
      <button onClick={() => inc(1)}>+1</button>
      <h1>
        <>Counter By: {count}</>
      </h1>
      <h2>
        <>Clicks: {clicks}</>
      </h2>
      <button onClick={() => inc(5)}>5</button>
    </div>
  );
};
