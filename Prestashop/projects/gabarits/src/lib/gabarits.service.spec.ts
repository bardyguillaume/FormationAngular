import { TestBed } from '@angular/core/testing';

import { GabaritsService } from './gabarits.service';

describe('GabaritsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GabaritsService = TestBed.get(GabaritsService);
    expect(service).toBeTruthy();
  });
});
