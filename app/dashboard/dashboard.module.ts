import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardResolve } from './dashboard-resolve.service';

import { dashboardRouting } from './dashboard.routing';

@NgModule({
	imports : [ CommonModule,
				dashboardRouting ],
	declarations : [ DashboardComponent ],
	providers : [ DashboardResolve ]
})
export class DashboardModule { }