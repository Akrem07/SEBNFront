import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingRolesComponent } from './listing-roles.component';

describe('ListingRolesComponent', () => {
  let component: ListingRolesComponent;
  let fixture: ComponentFixture<ListingRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
