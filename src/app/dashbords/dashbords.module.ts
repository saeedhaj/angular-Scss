import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordsRoutingModule } from './dashbords-routing.module';
import { DashbordsComponent } from './dashbords.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [DashbordsComponent],
  imports: [
    CommonModule,
    DashbordsRoutingModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule 
   
  ]
})
export class DashbordsModule { }
