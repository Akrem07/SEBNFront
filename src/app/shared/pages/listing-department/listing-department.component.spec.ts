import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDepartmentComponent } from './listing-department.component';

describe('ListingDepartmentComponent', () => {
  let component: ListingDepartmentComponent;
  let fixture: ComponentFixture<ListingDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
