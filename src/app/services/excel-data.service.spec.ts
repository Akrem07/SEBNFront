import { TestBed } from '@angular/core/testing';

import { ExcelData } from './excel-data.service';

describe('ExcelData', () => {
  let service: ExcelData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcelData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
