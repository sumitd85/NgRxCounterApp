import * as fromCounter from "./counter.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface State {
  Counter: number;
}

export const reducers: ActionReducerMap<State> = {
  Counter: fromCounter.reducer
};
