import { CounterAction, CounterActionTypes } from "../actions/counter.action";

export function reducer(state = 0, action: CounterAction): number {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return state + 1;
    case CounterActionTypes.Decrement:
      return state - 1;
    case CounterActionTypes.ResetSuceess:
      console.log(`Action called ${action.payload.value}`)
      return (state = action.payload.value);
    default:
      return state;
  }
}
