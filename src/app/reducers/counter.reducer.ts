import { CounterAction, CounterActionTypes } from "../actions/counter.action";
//import { State } from './index';

export interface State {
  Counter: number
}

export const intitalState: State = {
  Counter: 0
};

export function reducer(state: State = intitalState, action: CounterAction): State {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return { ...state, Counter: state.Counter + 1 };
    case CounterActionTypes.Decrement:
      return { ...state, Counter: state.Counter - 1 };
    case CounterActionTypes.ResetSuceess:
      console.log(`Action called ${action.payload.value}`)
      return { ...state, Counter: action.payload.value };
    default:
      return state;
  }
}
