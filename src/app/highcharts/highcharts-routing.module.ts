import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HighchartsComponent } from './highcharts.component';

const routes: Routes = [{ path: '', component: HighchartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighchartsRoutingModule { }
