import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionSheetComponent } from './function-sheet.component';

describe('FunctionSheetComponent', () => {
  let component: FunctionSheetComponent;
  let fixture: ComponentFixture<FunctionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
