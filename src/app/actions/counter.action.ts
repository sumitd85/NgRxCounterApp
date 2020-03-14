import { Action } from "@ngrx/store";

export enum CounterActionTypes {
  Increment = "[Counter] Increment",
  Decrement = "[Counter] Decrement",
  Reset = "[Counter] Reset",
  ResetSuceess = "[Counter] Reset Success"
}

export class CounterIncrement implements Action {
  readonly type = CounterActionTypes.Increment;
}

export class CounterDecrement implements Action {
  readonly type = CounterActionTypes.Decrement;
}

export class CounterReset implements Action {
  readonly type = CounterActionTypes.Reset;
}

export class CounterResetSuccess implements Action {
  readonly type = CounterActionTypes.ResetSuceess;
  constructor(public payload: { value: number }) { }
}

export type CounterAction =
  CounterIncrement | 
  CounterDecrement | 
  CounterReset | 
  CounterResetSuccess;
