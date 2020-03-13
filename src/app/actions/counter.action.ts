import { Action } from "@ngrx/store";

export enum CounterActionTypes {
  Increment = "[Counter] Increment",
  Decrement = "[Counter] Decrement",
  Reset = "[Counter] Reset"
}

export class CounterIncrement implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class CounterDecrement implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export class CounterReset implements Action {
  readonly type = CounterActionTypes.Reset;
  constructor(public payload: { value: number }) {}
}

export type CounterAction = CounterIncrement | CounterDecrement | CounterReset;
