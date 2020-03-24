import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as fromStore from "../reducers";
//import { State } from "../reducers";

import {
  CounterIncrement,
  CounterDecrement,
  CounterReset
} from "../actions/counter.action";

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
})
export class CounterContainerComponent {
  totalCount: number;

  constructor(private store: Store<fromStore.EventState>) {
    this.store
      .pipe(select("counterState"))
      .subscribe((counterState) =>
        (this.totalCount = counterState.Counter));

        //this.totalCount = this.store.select(AppState => AppState.Counter);
  }

  increment = () => this.store.dispatch(new CounterIncrement());

  decrement = () => this.store.dispatch(new CounterDecrement());

  reset = () => this.store.dispatch(new CounterReset());
}
