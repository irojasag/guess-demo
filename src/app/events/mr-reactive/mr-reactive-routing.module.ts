import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MrReactiveComponent } from './mr-reactive.component';

const routes: Routes = [
	{
		path: '',
		component: MrReactiveComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MrReactiveRoutingModule {}
