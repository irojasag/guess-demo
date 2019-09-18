import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictivePrefetchingComponent } from './predictive-prefetching.component';

const routes: Routes = [
	{
		path: '',
		component: PredictivePrefetchingComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PredictivePrefetchingRoutingModule {}
