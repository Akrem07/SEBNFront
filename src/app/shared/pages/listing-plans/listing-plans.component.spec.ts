import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingPlansComponent } from './listing-plans.component';

describe('ListingPlansComponent', () => {
  let component: ListingPlansComponent;
  let fixture: ComponentFixture<ListingPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingPlansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
