import * as fromCounter from "./counter.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface EventState {
  counterState: fromCounter.State;
}

export const reducers: ActionReducerMap<EventState> = {
  counterState: fromCounter.reducer
};
