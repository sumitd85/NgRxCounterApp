import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAction from '../Actions/counter.action';
import { switchMap, map } from "rxjs/operators";
import { from } from 'rxjs';

@Injectable()
export class CounterEffects {
    constructor(private actions$: Actions) { }

    @Effect() reset$ = this.actions$.pipe(
        ofType(fromAction.CounterActionTypes.Reset),
        switchMap(() =>
            from([0]).pipe(
                map(data =>
                    new fromAction.CounterResetSuccess(
                        { value: data })))
        ));
}