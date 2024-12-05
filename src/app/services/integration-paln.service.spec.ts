import { TestBed } from '@angular/core/testing';

import { IntegrationPalnService } from './integration-paln.service';

describe('IntegrationPalnService', () => {
  let service: IntegrationPalnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrationPalnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
