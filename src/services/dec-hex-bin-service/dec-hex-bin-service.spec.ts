import { TestBed } from '@angular/core/testing';

import { DecHexBinService } from './dec-hex-bin-service';

describe('DecHexBinService', () => {
  let service: DecHexBinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecHexBinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
