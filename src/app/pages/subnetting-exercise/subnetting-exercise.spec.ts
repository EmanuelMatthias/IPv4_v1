import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnettingExercise } from './subnetting-exercise';

describe('SubnettingExercise', () => {
  let component: SubnettingExercise;
  let fixture: ComponentFixture<SubnettingExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubnettingExercise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubnettingExercise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
