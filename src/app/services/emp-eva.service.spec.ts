import { TestBed } from '@angular/core/testing';

import { EmpEvaService } from './emp-eva.service';

describe('EmpEvaService', () => {
  let service: EmpEvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpEvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
