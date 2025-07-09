import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIpv4 } from './input-ipv4';

describe('InputIpv4', () => {
  let component: InputIpv4;
  let fixture: ComponentFixture<InputIpv4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputIpv4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputIpv4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
