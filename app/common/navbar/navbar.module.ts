import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';

import { Titlecase } from '../pipes/titlecase.pipe';

@NgModule({
	imports : [ CommonModule,
				RouterModule ],
	declarations : [ NavbarComponent,
					Titlecase ],
	schemas : [ CUSTOM_ELEMENTS_SCHEMA ],
	exports : [ NavbarComponent ],
})
export class NavbarModule { }