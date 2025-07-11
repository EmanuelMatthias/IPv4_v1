import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecHexBinTable } from './dec-hex-bin-table';

describe('DecHexBinTable', () => {
  let component: DecHexBinTable;
  let fixture: ComponentFixture<DecHexBinTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecHexBinTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecHexBinTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
