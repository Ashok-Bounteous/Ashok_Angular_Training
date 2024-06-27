// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-my-component',
//   standalone: true,
//   imports: [],
//   templateUrl: './my-component.component.html',
//   styleUrl: './my-component.component.scss'
// })
// export class MyComponentComponent {

// }


// import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
// import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

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
//   styleUrls: ['./my-component.component.css'],
//   providers: [CurrencyPipe, DatePipe, UpperCasePipe]
// })
// export class MyComponent implements OnInit, OnChanges, OnDestroy {
//   @Input() someInput: string = '';
//   users: User[] = [];
//   readonlyUser: ReadonlyUser;

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

//   formatCurrency(value: number): string {
//     return this.currencyPipe.transform(value, 'USD');
//   }

//   formatDate(date: Date): string {
//     return this.datePipe.transform(date, 'fullDate');
//   }

//   toUpperCase(value: string): string {
//     return this.upperCasePipe.transform(value);
//   }
// }


import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

// Interface
interface User {
  id: number;
  name: string;
  email: string;
}

// Generic Class
class DataService<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

// Utility Type
type ReadonlyUser = Readonly<User>;

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  providers: [CurrencyPipe, DatePipe, UpperCasePipe,CommonModule]
})
export class MyComponent implements OnInit, OnChanges, OnDestroy {
  @Input() someInput: string | null = null; // Allow null
  users: User[] = [];
  readonlyUser: ReadonlyUser;
  nums: number[] = [1,23,45,123,0,7];

  constructor(
    private currencyPipe: CurrencyPipe,
    private datePipe: DatePipe,
    private upperCasePipe: UpperCasePipe
  ) {
    // Using the generic class
    const userService = new DataService<User>();
    userService.add({ id: 1, name: 'John Doe', email: 'john.doe@example.com' });
    this.users = userService.getAll();

    // Using the utility type
    this.readonlyUser = { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' };
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.users);
    console.log(this.readonlyUser);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  formatCurrency(value: number): string|null {
    return this.currencyPipe.transform(value, 'USD');
  }

  formatDate(date: Date): string|null {
    return this.datePipe.transform(date, 'fullDate');
  }

  toUpperCase(value: string): string {
    return this.upperCasePipe.transform(value);
  }
}