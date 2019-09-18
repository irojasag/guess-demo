import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DockerizacionAngularRoutingModule } from './dockerizacion-angular-routing.module';
import { DockerizacionAngularComponent } from './dockerizacion-angular.component';

@NgModule({
  declarations: [DockerizacionAngularComponent],
  imports: [
    CommonModule,
    DockerizacionAngularRoutingModule
  ]
})
export class DockerizacionAngularModule { }
