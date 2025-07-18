import { TestBed } from '@angular/core/testing';
import { Subnet } from './subnet';


describe('Subnet', () => {
  let service: Subnet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Subnet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
