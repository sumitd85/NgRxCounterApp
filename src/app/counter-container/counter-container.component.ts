import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import * as fromStore from "../reducers";

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
  counter: number;

  constructor(private store: Store<fromStore.State>) {
    this.store
      .pipe(select("Counter"))
      .subscribe(counter => (this.counter = counter));
  }

  increment = () => this.store.dispatch(new CounterIncrement());

  decrement = () => this.store.dispatch(new CounterDecrement());

  reset = () => this.store.dispatch(new CounterReset({ value: 0 }));
}
