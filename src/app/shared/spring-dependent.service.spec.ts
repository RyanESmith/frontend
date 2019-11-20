import { TestBed } from '@angular/core/testing';

import { SpringDependentService } from './spring-dependent.service';

describe('SpringDependentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringDependentService = TestBed.get(SpringDependentService);
    expect(service).toBeTruthy();
  });
});
