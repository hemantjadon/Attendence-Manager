import { Component } from '@angular/core';

@Component({
	moduleId : module.id,
	selector : 'ng-app',
	template : `
			<a routerLink="/home">Home</a>
			<router-outlet></router-outlet>
		`
})
export class AppComponent { }