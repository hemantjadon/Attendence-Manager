import { Component,OnInit,OnDestroy,Output,EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TitleService } from '../services/title.service';

@Component({
	moduleId : module.id,
	selector : 'nav-bar',
	templateUrl : './templates/navbar.component.html',
	styleUrls : ['./styles/navbar.component.css'],
	encapsulation : ViewEncapsulation.Native
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