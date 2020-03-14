import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./counter/counter.component";
import { reducers } from "./reducers";
import { CounterContainerComponent } from "./counter-container/counter-container.component";
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effect';

@NgModule({
  declarations: [AppComponent, CounterComponent, CounterContainerComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
