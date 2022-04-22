export type CounterAction =
  | { type: "increase" }
  | { type: "decrease" }
  | { type: "increaseBy"; payload: number };
