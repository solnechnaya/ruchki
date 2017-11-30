import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./component/test/test";


const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
