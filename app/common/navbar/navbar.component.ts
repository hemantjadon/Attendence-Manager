import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
	moduleId : module.id,
	selector : 'nav-bar',
	templateUrl : './templates/navbar.component.html',
	styleUrls : ['./styles/navbar.component.css']
})
export class NavbarComponent implements OnInit{
	pageTitle : string = "";

	constructor (
		private activatedRoute : ActivatedRoute,
		private router : Router
	) {}

	ngOnInit(){
		this.setPageTitle();
	}

	private setPageTitle() : void {
		console.log(this.activatedRoute);
		this.pageTitle = "Dash";
	}
}