import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBinary } from './simple-binary';

describe('SimpleBinary', () => {
  let component: SimpleBinary;
  let fixture: ComponentFixture<SimpleBinary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleBinary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleBinary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
