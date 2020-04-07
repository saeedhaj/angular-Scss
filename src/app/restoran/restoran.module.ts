import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoranRoutingModule } from './restoran-routing.module';
import { RestoranComponent } from './restoran.component';


@NgModule({
  declarations: [RestoranComponent],
  imports: [
    CommonModule,
    RestoranRoutingModule
  ]
})
export class RestoranModule { }
