import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsRXJSComponent } from './operators-rxjs.component';

describe('OperatorsRXJSComponent', () => {
  let component: OperatorsRXJSComponent;
  let fixture: ComponentFixture<OperatorsRXJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorsRXJSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperatorsRXJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
