import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictivePrefetchingRoutingModule } from './predictive-prefetching-routing.module';
import { PredictivePrefetchingComponent } from './predictive-prefetching.component';

@NgModule({
  declarations: [PredictivePrefetchingComponent],
  imports: [
    CommonModule,
    PredictivePrefetchingRoutingModule
  ]
})
export class PredictivePrefetchingModule { }
