import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private users: User[] = [{id: 111, name: 'some', email: 'aaa@aaa'}];
  private userAddedSource = new BehaviorSubject<User[]>(this.users);

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.userAddedSource.asObservable();
  }

  addUser(userDetails: User) {
    this.users.push(userDetails);
    this.userAddedSource.next(this.users.slice()); // Emit a copy of users array
  }
}
