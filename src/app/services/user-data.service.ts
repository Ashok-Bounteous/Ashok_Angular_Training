// user-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user: User[] = []

  private userAddedSource = new BehaviorSubject<User[]>(this.user);
  
  getUsers(): Observable<User[]>{
    // return this.userAddedSource.asObservable();
    return of(this.user)
  }

  addUser(userDetails: User) {
    this.user.push(userDetails)
    this.userAddedSource.next(this.user);
    // console.log('New user added:', user); // Optional: Log the added user for debugging
  }
}
