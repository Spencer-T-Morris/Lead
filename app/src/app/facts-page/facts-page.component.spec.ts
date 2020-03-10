import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsPageComponent } from './facts-page.component';

describe('FactsPageComponent', () => {
  let component: FactsPageComponent;
  let fixture: ComponentFixture<FactsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
