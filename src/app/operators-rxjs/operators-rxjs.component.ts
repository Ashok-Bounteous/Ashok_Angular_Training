import { Component } from '@angular/core';
import { of } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators-rxjs',
  templateUrl: './operators-rxjs.component.html',
  styleUrls: ['./operators-rxjs.component.scss']
})
export class OperatorsRXJSComponent {
  inputData: string = '';
  result: string = '';

  constructor() {}

  filterExample() {
    const data = [1, 2, 3, 4, 5];
    this.inputData = JSON.stringify(data);

    this.result = ''; // Clear previous results

    of(...data)
      .pipe(
        tap(x => console.log("The given input is:", x)),
        filter(num => num % 2 === 0),
        tap(x => console.log("Filtered value:", x))
      )
      .subscribe(filteredNum => {
        this.result += (this.result ? ', ' : '') + filteredNum;
      });
  }

  mapExample() {
    const data = [1, 2, 3];
    this.inputData = JSON.stringify(data);

    this.result = ''; // Clear previous results

    of(...data)
      .pipe(
        tap(x => console.log("Original value:", x)),
        map(num => num * 10),
        tap(x => console.log("Mapped value:", x))
      )
      .subscribe(mappedNum => {
        this.result += (this.result ? ', ' : '') + mappedNum;
      });
  }

  mergeExample() {
    const source1$ = of('A', 'B');
    const source2$ = of('C', 'D');
    const data = ['A-C', 'A-D', 'B-C', 'B-D'];
    this.inputData = JSON.stringify(data);

    this.result = ''; // Clear previous results

    source1$.pipe(
      mergeMap(val1 =>
        source2$.pipe(
          map(val2 => `${val1}-${val2}`),
          tap(x => console.log("Merged value:", x))
        )
      )
    ).subscribe(result => {
      console.log("Merged Result:", result);
      this.result += (this.result ? ', ' : '') + result;
    });
  }
}
