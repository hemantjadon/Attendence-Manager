import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing,appRoutingProviders } from './app.routing';

import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
	imports : [ BrowserModule,
				routing,
				HomeModule,
				DashboardModule ],
	declarations : [ AppComponent, ],
	providers : [ appRoutingProviders ],
	bootstrap : [ AppComponent ]
})
export class AppModule { }