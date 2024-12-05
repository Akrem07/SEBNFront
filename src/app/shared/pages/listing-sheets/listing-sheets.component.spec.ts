import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSheetsComponent } from './listing-sheets.component';

describe('ListingSheetsComponent', () => {
  let component: ListingSheetsComponent;
  let fixture: ComponentFixture<ListingSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingSheetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
