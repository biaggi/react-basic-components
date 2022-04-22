export enum ActionEnum {
  increase,
  decrease,
  increaseBy,
}
export type CounterAction =
  | { type: ActionEnum.increase }
  | { type: ActionEnum.decrease }
  | { type: ActionEnum.increaseBy; payload: number };

export const increase = (): CounterAction => ({
  type: ActionEnum.increase,
});
export const decrease = (): CounterAction => ({
  type: ActionEnum.decrease,
});
export const increaseBy = (value: number): CounterAction => ({
  type: ActionEnum.increaseBy,
  payload: value,
});
