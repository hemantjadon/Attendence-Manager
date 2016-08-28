import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TitleService {
	private _title  = new Subject<string>();
	public title = this._title.asObservable();

	public setTitle(title : string) : void {
		this._title.next(title);
	}
}