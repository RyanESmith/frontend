import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringDependentComponent } from './spring-dependent.component';

describe('SpringDependentComponent', () => {
  let component: SpringDependentComponent;
  let fixture: ComponentFixture<SpringDependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringDependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
