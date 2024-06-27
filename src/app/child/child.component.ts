// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   standalone: true,
//   imports: [],
//   templateUrl: './child.component.html',
//   styleUrl: './child.component.scss'
// })
// export class ChildComponent {

// }

import { Component, OnInit, OnChanges, SimpleChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>child works!</p>
             <h3>Child Component</h3>
             <p>Parent Data in Child: {{ parentData }}</p>`,
  styles: [`:host {
    display: block;
    padding: 15px;
    background-color: #e9ecef;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  h3 {
    color: #333;
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 16px;
    color: #666;
  }`]
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() parentData ?: string;

  constructor() {
    console.log('ChildComponent: constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ChildComponent: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ChildComponent: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ChildComponent: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ChildComponent: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ChildComponent: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ChildComponent: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ChildComponent: ngOnDestroy');
  }
}