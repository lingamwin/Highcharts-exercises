import { NgModule } from '@angular/core';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';
import { DynamicComponentComponent } from './dynamic-component.component';
import { Service } from './service';
import { HighchartService } from '../highcharts/highchart.service';
import { SafePipe } from '../highcharts/safe.pipe';

@NgModule({
  declarations: [DynamicComponentComponent, SafePipe],
  imports: [
    DynamicComponentRoutingModule
  ],
  providers: [ Service, HighchartService ],
})
export class DynamicComponentModule { }
