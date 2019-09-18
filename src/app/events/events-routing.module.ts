import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';

const routes: Routes = [
	{
		path: '',
		component: EventsComponent
	},
	{
		path: 'material-cdk',
		loadChildren: () => import('./material-cdk/material-cdk.module').then((m) => m.MaterialCdkModule)
	},
	{
		path: 'predictive-prefetching',
		loadChildren: () =>
			import('./predictive-prefetching/predictive-prefetching.module').then((m) => m.PredictivePrefetchingModule)
	},
	{
		path: 'mr-reactive',
		loadChildren: () => import('./mr-reactive/mr-reactive.module').then((m) => m.MrReactiveModule)
	},
	{
		path: 'dockerizacion-angular',
		loadChildren: () =>
			import('./dockerizacion-angular/dockerizacion-angular.module').then((m) => m.DockerizacionAngularModule)
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EventsRoutingModule {}
