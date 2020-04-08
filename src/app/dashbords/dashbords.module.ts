import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordsRoutingModule } from './dashbords-routing.module';
import { DashbordsComponent } from './dashbords.component';


@NgModule({
  declarations: [DashbordsComponent],
  imports: [
    CommonModule,
    DashbordsRoutingModule
  ]
})
export class DashbordsModule { }
