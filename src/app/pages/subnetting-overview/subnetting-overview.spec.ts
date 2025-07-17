import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnettingOverview } from './subnetting-overview';

describe('SubnettingOverview', () => {
  let component: SubnettingOverview;
  let fixture: ComponentFixture<SubnettingOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubnettingOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnettingOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
