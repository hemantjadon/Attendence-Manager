import { Component,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TitleService } from '../services/title.service';

@Component({
	moduleId : module.id,
	selector : 'nav-bar',
	templateUrl : './templates/navbar.component.html',
	styleUrls : ['./styles/navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
	constructor(
		private titleService : TitleService
	) {}

	private pageTitle_subscription : Subscription;
	private pageTitle : string;

	ngOnInit () {
		this.pageTitle_subscription = this.titleService.title.subscribe(title => {
			this.pageTitle = title;
		});
	}

	ngOnDestroy(){
		this.pageTitle_subscription.unsubscribe();
	}
 }