import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  api_key="AIzaSyBwlEr0ivUawpdPNiIa6M8V4MbK6InE7Rk";

  private StateNav = new BehaviorSubject<boolean>(false);
  currentStateNav = this.StateNav.asObservable();

  constructor() { }

  changeStateNav(value: boolean) {
    this.StateNav.next(value)
  }

}