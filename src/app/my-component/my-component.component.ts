// import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
// import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

// // Interface
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// // Generic Class
// class DataService<T> {
//   private data: T[] = [];

//   add(item: T): void {
//     this.data.push(item);
//   }

//   getAll(): T[] {
//     return this.data;
//   }
// }

// // Utility Type
// type ReadonlyUser = Readonly<User>;

// @Component({
//   selector: 'app-my-component',
//   templateUrl: './my-component.component.html',
//   styleUrls: ['./my-component.component.scss'],
//   providers: [CurrencyPipe, DatePipe, UpperCasePipe,CommonModule]
// })
// export class MyComponent implements OnInit, OnChanges, OnDestroy {
//   @Input() someInput: string | null = null; // Allow null
//   users: User[] = [];
//   readonlyUser: ReadonlyUser;
//   nums: number[] = [1,23,45,123,0,7];

//   constructor(
//     private currencyPipe: CurrencyPipe,
//     private datePipe: DatePipe,
//     private upperCasePipe: UpperCasePipe
//   ) {
//     // Using the generic class
//     const userService = new DataService<User>();
//     userService.add({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
//     this.users = userService.getAll();

//     // Using the utility type
//     this.readonlyUser = { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' };
//   }

//   ngOnInit(): void {
//     console.log('ngOnInit called');
//     console.log(this.users);
//     console.log(this.readonlyUser);
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log('ngOnChanges called', changes);
//   }

//   ngOnDestroy(): void {
//     console.log('ngOnDestroy called');
//   }

//   formatCurrency(value: number): string|null {
//     return this.currencyPipe.transform(value, 'USD');
//   }

//   formatDate(date: Date): string|null {
//     return this.datePipe.transform(date, 'fullDate');
//   }

//   toUpperCase(value: string): string {
//     return this.upperCasePipe.transform(value);
//   }
// }
/* This is end of the Old Program */


import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UserDataService, User } from '../services/user-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private userSubscription!: Subscription;

  constructor(
    private userDataService: UserDataService,
    private cdRef: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log("ONINIT");
    this.userSubscription = this.userDataService.getUsers().subscribe((data) => {
      this.users = data // Add new user to users array
      // console.log('New user added here :', user);
      // console.log("The complete array is : ",this.users);

      // Trigger change detection manually
      this.cdRef.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      console.log("Destroy!!!");
      this.userSubscription.unsubscribe();
    }
  }
}
