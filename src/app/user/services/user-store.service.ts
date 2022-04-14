import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
private name$$ = new BehaviorSubject<string>("defaultName");
private isAdmin$$ = new BehaviorSubject<boolean>(false);

name$ = this.name$$.asObservable();
isAdmin$ = this.isAdmin$$.asObservable();

constructor() { }


}
