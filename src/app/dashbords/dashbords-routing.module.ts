import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordsComponent } from './dashbords.component';


const routes: Routes = [
  {
    path:'',
    component:DashbordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordsRoutingModule { }
