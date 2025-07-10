import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipv4Exercise } from './ipv4-exercise';

describe('Ipv4Exercise', () => {
  let component: Ipv4Exercise;
  let fixture: ComponentFixture<Ipv4Exercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ipv4Exercise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ipv4Exercise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
