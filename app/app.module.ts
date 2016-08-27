import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { routing,appRoutingProviders } from './app.routing';

@NgModule({
	imports : [ BrowserModule,
				routing,
				HomeModule ],
	declarations : [ AppComponent, ],
	providers : [ appRoutingProviders ],
	bootstrap : [ AppComponent ]
})
export class AppModule { }