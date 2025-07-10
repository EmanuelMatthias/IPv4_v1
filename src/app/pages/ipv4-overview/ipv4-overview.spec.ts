import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipv4Overview } from './ipv4-overview';

describe('Ipv4Overview', () => {
  let component: Ipv4Overview;
  let fixture: ComponentFixture<Ipv4Overview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ipv4Overview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ipv4Overview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
