import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssitanceComponent } from './assitance.component';

describe('AssitanceComponent', () => {
  let component: AssitanceComponent;
  let fixture: ComponentFixture<AssitanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssitanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssitanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
