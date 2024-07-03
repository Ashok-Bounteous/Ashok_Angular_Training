import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Subject, BehaviorSubject, of, from, fromEvent} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})

export class ObservablesComponent implements OnInit, AfterViewInit {
  // Accessing template reference variable
  @ViewChild('templateButton') templateButton!: ElementRef<HTMLButtonElement>;
  constructor(private elementRef: ElementRef) {}

  // Properties to hold emitted data
  observableData: string[] = [];
  subjectData: string[] = [];
  behaviorSubjectData: string[] = [];
  ofData: number[] = [];
  fromData: string[] = [];

  // Subject and BehaviorSubject instances
  private subject = new Subject<string>();
  private behaviorSubject = new BehaviorSubject<string>('Initial Value');

  ngOnInit() {
    // Observable using 'of'
    const ofObservable$ = of(1,2,3);
    ofObservable$.subscribe({
      next: (value: number) => this.ofData.push(value),
      error: (error: any) => console.error('Error:', error),
      complete: () => console.log('of Observable completed')
    });

    // Observable using 'from' with an array
    const fromObservable$ = from(['X', 'Y', 'Z']);
    fromObservable$.subscribe({
      next: (value: string) => this.fromData.push(value),
      error: (error: any) => console.error('Error:', error),
      complete: () => console.log('from Observable completed')
    });

    // Observable using 'from' with a promise
    const promiseObservable$ = from(Promise.resolve('Promise Resolved'));
    promiseObservable$.subscribe({
      next: (value: string) => this.fromData.push(value),
      error: (error: any) => console.error('Error:', error),
      complete: () => console.log('from Promise Observable completed')
    });

    // Observable Example with specific type
    const observable$ = of('Observable 1', 'Observable 2', 'Observable 3').pipe(
      map((value: string) => `Mapped ${value}`),
      catchError((err: any) => {
        console.error('Error:', err);
        return of('Error handled');
      })
    );
    
    // Observer object for subscribe
    const observer = {
      next: (value: string) => this.observableData.push(value),
      error: (error: any) => console.error('Error:', error),
      complete: () => console.log('Observable completed')
    };
    
    // Subscribe using observer object
    observable$.subscribe(observer);

    this.subject.next('Mentioned Before Subscribe!!!');
    // Subject Example
    this.subject.subscribe({
      next: value => this.subjectData.push(value)
    });
    this.subject.next('Subject 1');
    this.subject.next('Subject 2');

    /*
    By removing the comments in the below line, the inital value for behaviouralSubject gets replaced with this, because only the last value is stored here. 
    */
    this.behaviorSubject.next('Mentioned Before Behavioural Subject!!!');
    // BehaviorSubject Example
    this.behaviorSubject.subscribe({
      next: value => this.behaviorSubjectData.push(value)
    });
    this.behaviorSubject.next('BehaviorSubject 1');
    this.behaviorSubject.next('BehaviorSubject 2');

    // Emit value from observable to BehaviorSubject
    const source$ = of('External BehaviorSubject Value');
    source$.subscribe(value => this.behaviorSubject.next(value));

  }

  ngAfterViewInit(): void {
    const button = this.elementRef.nativeElement.querySelector('button');
    const eventObservable = fromEvent(button, 'mouseenter');
    eventObservable.subscribe({
      next: event => console.log('Button was hovered over!', event),
      error: err => console.error(`Error: ${err}`),
      complete: () => console.log('Event Observable complete')
    });

    // Access button using template reference variable
    this.handleTemplateButtonClick();

    // Access button using ElementRef and querySelector
    this.handleElementRefButtonClick();
  }



  emitSubjectValue() {
    this.subject.next(`Subject Value ${Math.random().toFixed(2)}`);
  }

  emitBehaviorSubjectValue() {
    this.behaviorSubject.next(`BehaviorSubject Value ${Math.random().toFixed(2)}`);
  }


   // Method to handle template reference variable button click
   handleTemplateButtonClick(): void {
    const templateButtonClick$ = fromEvent(this.templateButton.nativeElement, 'click');

    templateButtonClick$.subscribe({
      next: event => console.log('Template Ref Button clicked!', event),
      error: err => console.error('Template Ref Button error:', err),
      complete: () => console.log('Template Ref Button click handling complete')
    });
  }

  // Method to handle ElementRef button click
  handleElementRefButtonClick(): void {
    const buttonElement = this.elementRef.nativeElement.querySelector('#elementRefButton');
    const elementRefButtonClick$ = fromEvent(buttonElement, 'click');

    elementRefButtonClick$.subscribe({
      next: event => console.log('ElementRef Button clicked!', event),
      error: err => console.error('ElementRef Button error:', err),
      complete: () => console.log('ElementRef Button click handling complete')
    });
  }
}
