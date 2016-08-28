import { Component } from '@angular/core';

@Component({
	moduleId : module.id,
	selector : 'ng-app',
	template : `
			<paper-drawer-panel force-narrow id="panel">
				<div drawer> Drawer panel... </div>
				<div main> 			
					<paper-header-panel>
						<div class="paper-header">
							<nav-bar></nav-bar>
						</div>
						<div>
							<router-outlet></router-outlet>
						</div>
					</paper-header-panel> 
				</div>
			</paper-drawer-panel>
		`
})
export class AppComponent { }