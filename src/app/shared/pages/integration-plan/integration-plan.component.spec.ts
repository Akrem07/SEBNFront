import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationPlanComponent } from './integration-plan.component';

describe('IntegrationPlanComponent', () => {
  let component: IntegrationPlanComponent;
  let fixture: ComponentFixture<IntegrationPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationPlanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
