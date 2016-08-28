import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';

import { TitleService } from '../common/services/title.service';

@Injectable()
export class DashboardResolve implements Resolve<any> {
	constructor(
		private activatedRoute : ActivatedRoute,
		private titleService : TitleService
	){}

	resolve(){
		this.titleService.setTitle("dashboard");
	}
}