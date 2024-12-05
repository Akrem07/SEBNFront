import { TestBed } from '@angular/core/testing';

import { FicheFonctionService } from './fiche-fonction.service';

describe('FicheFonctionService', () => {
  let service: FicheFonctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheFonctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
