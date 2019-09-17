import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialCdkRoutingModule } from './material-cdk-routing.module';
import { MaterialCdkComponent } from './material-cdk.component';

@NgModule({
  declarations: [MaterialCdkComponent],
  imports: [
    CommonModule,
    MaterialCdkRoutingModule
  ]
})
export class MaterialCdkModule { }
