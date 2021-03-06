import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const homeRoutes : Routes = [
	{
		path : '',
		pathMatch : 'full',
		redirectTo : 'home'
	},
	{
		path : 'home',
		component : HomeComponent,
	}
]

export const homeRouting : ModuleWithProviders = RouterModule.forChild(homeRoutes);