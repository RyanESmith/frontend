import { TestBed } from '@angular/core/testing';

import { SpringIndependentService } from './spring-independent.service';

describe('SpringIndependentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpringIndependentService = TestBed.get(SpringIndependentService);
    expect(service).toBeTruthy();
  });
});
