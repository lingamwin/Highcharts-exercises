import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsRoutingModule } from './highcharts-routing.module';
import { HighchartsComponent } from './highcharts.component';

@NgModule({
  declarations: [HighchartsComponent],
  imports: [
    CommonModule,
    HighchartsRoutingModule
  ]

})
export class HighchartsModule { }
