import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () => import('./index/index.module').then((m) => m.IndexModule)
	},
	{
		path: 'events',
		pathMatch: 'full',
		loadChildren: () => import('./events/events.module').then((m) => m.EventsModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
