import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TitleService } from './common/services/title.service';

import { AppComponent } from './app.component';
import { routing,appRoutingProviders } from './app.routing';

import { NavbarModule } from './common/navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
	imports : [ BrowserModule,
				NavbarModule,
				routing,
				HomeModule,
				DashboardModule ],
	declarations : [ AppComponent ],
	providers  :  [ appRoutingProviders,
					TitleService ],
	bootstrap : [ AppComponent ]
})
export class AppModule { }