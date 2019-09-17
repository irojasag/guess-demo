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
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EventsRoutingModule {}
