import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringIndependentComponent } from './spring-independent.component';

describe('SpringIndependentComponent', () => {
  let component: SpringIndependentComponent;
  let fixture: ComponentFixture<SpringIndependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringIndependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringIndependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
