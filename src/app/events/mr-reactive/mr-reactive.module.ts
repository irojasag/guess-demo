import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MrReactiveRoutingModule } from './mr-reactive-routing.module';
import { MrReactiveComponent } from './mr-reactive.component';

@NgModule({
  declarations: [MrReactiveComponent],
  imports: [
    CommonModule,
    MrReactiveRoutingModule
  ]
})
export class MrReactiveModule { }
