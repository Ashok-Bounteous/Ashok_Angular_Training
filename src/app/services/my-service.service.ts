import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}  //Not needed if included in the appropriate module/component provider: [] list
)
export class MyServiceService {

  constructor() { }
  
  getData(): string {
    return 'Hello from MyService!';
  }
}
