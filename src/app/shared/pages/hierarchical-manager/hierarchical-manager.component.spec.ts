import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalManagerComponent } from './hierarchical-manager.component';

describe('HierarchicalManagerComponent', () => {
  let component: HierarchicalManagerComponent;
  let fixture: ComponentFixture<HierarchicalManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchicalManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchicalManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
