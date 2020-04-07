import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoranRoutingModule } from './restoran-routing.module';
import { RestoranComponent } from './restoran.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RestoranComponent],
  imports: [
    CommonModule,
    RestoranRoutingModule,
    FormsModule
  ]
})
export class RestoranModule { }
