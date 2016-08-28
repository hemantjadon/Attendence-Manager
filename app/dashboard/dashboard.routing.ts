import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardResolve } from './dashboard-resolve.service';

const dashboardRoutes : Routes = [
	{
		path : 'dashboard',
		component : DashboardComponent,
		resolve : [ DashboardResolve ],
		data : {
			page : "dashboard"
		}
	}
]

export const dashboardRouting : ModuleWithProviders = RouterModule.forChild(dashboardRoutes);