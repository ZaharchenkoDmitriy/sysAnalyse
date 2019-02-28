import { TestBed } from '@angular/core/testing';

import { GausServiceService } from './gaus-service.service';

describe('GausServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GausServiceService = TestBed.get(GausServiceService);
    expect(service).toBeTruthy();
  });
});
