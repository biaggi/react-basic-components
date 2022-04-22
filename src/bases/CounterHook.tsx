import { useCounter } from "../hooks/useCounter";

const MAX = 10;

export const CounterHook = () => {
  const { count, inc, dec, elementToAnimate } = useCounter({ max: 5 });
  return (
    <div>
      <button onClick={inc}>+1</button>
      <h1 ref={elementToAnimate}>
        <>Counter Hook: {count}</>
      </h1>
      <button ref={elementToAnimate} onClick={dec}>-1</button>
    </div>
  );
};
