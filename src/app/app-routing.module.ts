import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "counter", component: CounterContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
