import { TestBed } from '@angular/core/testing';

import { Ipv4 } from './ipv4';

describe('Ipv4', () => {
  let service: Ipv4;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ipv4);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
