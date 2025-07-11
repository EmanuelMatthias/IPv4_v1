import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecHexBinExercise } from './dec-hex-bin-exercise';

describe('DecHexBinExercise', () => {
  let component: DecHexBinExercise;
  let fixture: ComponentFixture<DecHexBinExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecHexBinExercise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecHexBinExercise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
