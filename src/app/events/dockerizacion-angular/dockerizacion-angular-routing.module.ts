import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DockerizacionAngularComponent } from './dockerizacion-angular.component';

const routes: Routes = [
	{
		path: '',
		component: DockerizacionAngularComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class DockerizacionAngularRoutingModule {}
